// dbConfig.js
require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: {
      rejectUnauthorized: false // This allows connection without verifying the server's certificate
    }
  };


  
module.exports = dbConfig;
  