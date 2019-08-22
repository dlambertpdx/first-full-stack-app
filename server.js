require ('dotenv').config();

// Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

// DB client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// App Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});