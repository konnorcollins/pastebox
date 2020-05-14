// routes/boxRoutes.js

const express = require('express');
const router = express.Router();
const {createNewBox, readBox, deleteBox} = require('../controllers/BoxController')

// Box Schema
const Box = require('../models/Box');


// POST /box
router.route('')
    .post(async (req, res) => {
        const text = req.body.text; // text contents
        let result = createNewBox(text);
        res.json({id: result});
    });

// GET /box/:id
router.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        let data = readBox(id);
        res.json({data: data});
    });

// DEL /box/:id
router.route('/:id')
    .delete(async (req, res) => {
        const id = req.params.id;
        let result = deleteBox(id);
        res.json({msg: `${id} deleted.`});
    });


module.exports = router;