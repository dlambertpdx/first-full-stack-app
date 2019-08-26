// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF EXISTS horror;
            DROP TABLE IF EXISTS genres;
    `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log('DROP TABLES ERROR: ' + err)
    )
    .then(() => {
        client.end();
    });