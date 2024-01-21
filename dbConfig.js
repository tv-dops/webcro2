// dbConfig.js
require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    // You can add more PostgreSQL connection options here if needed
  };


  
module.exports = dbConfig;
  