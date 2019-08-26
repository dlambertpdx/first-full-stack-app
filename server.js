// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public'));
app.use(express.json()); 

app.get('/api/horrors', (req, res) => {
    client.query(`
        SELECT
            h.id,
            h.title,
            g.name AS genre,
            h.summary,
            h.worthWatch,
            h.releaseYear,
            h.director,
            h.urlImage
        FROM HORROR h
        JOIN genres g
        ON h.genre_id = g.id;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.post('/api/horrors', (req, res) => {
    const horror = req.body;
    client.query(`
        INSERT INTO horror (title, summary, worthWatch, releaseYear, genre_id, director, urlImage)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
    `,
    [horror.title, horror.author, horror.url, horror.year, horror.genreId, horror.available]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/genres', (req, res) => {
    client.query(`
    SELECT
        id,
        name
    FROM genres
    ORDER BY name;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});


//Starting Server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});