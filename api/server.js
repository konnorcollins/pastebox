'use strict';

// dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// mongo db connection
mongoose.connect('mongodb://db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection established');
    })
    .catch(err => {
        console.err(`PASTEBOX API FAILURE: ${err}`);
        process.exit(1);
    });

// constants
const port = process.env.PORT || 8080;
const boxPath = '/box';

// routes
const boxRoutes = require('./src/routes/BoxRoutes');

// application
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(boxPath, boxRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});