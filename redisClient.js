const redis = require('redis');
require('dotenv').config();

// Use the External Redis URL for external connections
const externalRedisUrl = process.env.REDISCLI_AUTH;

const client = redis.createClient({
    url: externalRedisUrl
});

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();

module.exports = client;
