'use strict';

// dependencies
require('dotenv').config();
const express = require('express');

// constants
const port = process.env.PORT || 8080;

// app
const app = express();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});