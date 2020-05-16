// routes/boxRoutes.js

const express = require('express');
const router = express.Router();
const {createBox, getBox, deleteBox} = require('../services/BoxService');

// Box Schema
const Box = require('../models/Box');


// POST /box
router.route('')
    .post(async (req, res) => {
        const text = req.body.text; // text contents
        let result = createBox(text);
        res.json({id: result._id});
    });

// GET /box/:id
router.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        let data = getBox(id);
        res.json({data: data.filename});
    });

// DEL /box/:id
router.route('/:id')
    .delete(async (req, res) => {
        const id = req.params.id;
        let result = deleteBox(id);
        res.json({msg: `${id} deleted.`});
    });


module.exports = router;