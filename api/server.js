'use strict';

// dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// TODO: mongo db connection

// constants
const port = process.env.PORT || 8080;
const boxPath = '/box';

// routes
const boxRoutes = require('./src/routes/boxRoutes');

// application
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(boxPath, boxRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});