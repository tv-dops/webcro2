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
        res.render('/misc/403/index');
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

// Use this middleware in your app before your routes
app.use(redirectBots);


// ====================
// Middleware
// ====================
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/admin', (req, res) => {
    res.render('admin/login/index');
});

app.post('/admin/verify', verifyAdmin, (req, res)=>{
    res.redirect(200, '/admin/panel');
})

app.post('/admin/panel', checkAdminSession, (req, res) => {
    res.render('admin/panel/index');
})


// ====================
// Socket Handling
// ====================
io.on('connection', (socket, req) => {

    console.log('Connection !')

});

// ====================
// Server Startup
// ====================

server.listen(80, () => {
    console.log('HTTPS server running on port 80');
});
