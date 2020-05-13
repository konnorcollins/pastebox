'use strict';

const express = require('express');


// constants
const port = 8080;

// app
const app = express();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});