require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const horrors = require('./horror');
// note: you will need to create the database!
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        // "Promise all" does a parallel execution of async tasks
        return Promise.all(
            horrors.map(horror => {
                return client.query(`
                    INSERT INTO horrors (title, summary, worthWatch, year, director, url)
                    VALUES ($1, $2, $3, $4, $5, $6);
                `,
                [horror.title, horror.summary, horror.worthWatch, horror.year, horror.director, horror.url]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });