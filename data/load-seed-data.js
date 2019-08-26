require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const genres = require('./genres');
const horror = require('./horror');
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        // "Promise all" does a parallel execution of async tasks
        return Promise.all(
            genres.map(genre => {
                return client.query(`
                    INSERT INTO genres (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [genre])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(genres => {
        // "Promise all" does a parallel execution of async tasks
        return Promise.all(
            horror.map(horror => {
                const genre = genres.find(gen => {
                    return gen.name === horror.genre;
                });
                const genreId = genre.id;
    

                return client.query(`
                    INSERT INTO horror (title, genre_id, summary, worth_watch, release_year, director, url_image)
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
                `,
                [horror.title, genreId, horror.summary, horror.worth_watch, horror.release_year, horror.director, horror.url_image]);
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