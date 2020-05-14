// routes/boxRoutes.js
import {createNewBox, readBox, deleteBox} from '../controllers/BoxController';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Box Schema
const Box = require('../models/Box');


// POST /box
router.route('')
    .post(async (req, res) => {
        const text = req.body.text; // text contents
        let result = createNewBox(text);
        // TODO: respond with id
    });

// GET /box/:id
router.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        let data = readBox(id);
        // TODO: send box data
    });

// DEL /box/:id
router.route('/:id')
    .delete(async (req, res) => {
        const id = req.params.id;
        let result = deleteBox(id);
        // TODO: send confirmation response of some sort
    });


module.exports = router;