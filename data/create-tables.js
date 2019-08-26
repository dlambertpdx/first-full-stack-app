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
            CREATE TABLE genres (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL
            );

            CREATE TABLE horror (
                id SERIAL PRIMARY KEY NOT NULL,
                title VARCHAR(256) NOT NULL,
                summary TEXT NOT NULL,
                worth_watch BOOLEAN NOT NULL,
                release_year INTEGER NOT NULL,
                director VARCHAR(256) NOT NULL,
                genre_id INTEGER NOT NULL REFERENCES genres(id),
                url_image VARCHAR(256) NOT NULL
            );
    `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log('CREATE TABLES ERROR: ' + err)
    )
    .then(() => {
        client.end();
    });