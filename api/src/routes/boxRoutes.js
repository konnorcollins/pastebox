// routes/boxRoutes.js

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Box Schema
const Box = require('../models/Box');


// POST /box
router.route('')
    .post(async (req, res) => {
        const text = req.body.text; // text contents
        // TODO: generate box with text, insert and save
        // TODO: respond with id
    });

// GET /box/:id
router.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        // TODO: fetch box based on id
        // TODO: send box data
    });

// DEL /box/:id
router.route('/:id')
    .delete(async (req, res) => {
        const id = req.params.id;
        // TODO: delete box based on id
        // TODO: send confirmation response of some sort
    });


module.exports(router);