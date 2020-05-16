// routes/boxRoutes.js

const express = require('express');
const router = express.Router();
const {createBox, getBox, deleteBox} = require('../services/BoxService');
const { nanoid } = require('nanoid');

// Box Schema
const Box = require('../models/Box');


// POST /box
router.route('')
    .post(async (req, res) => {
        const text = req.body.text; // text contents
        createBox({title: text, filename: nanoid()})
            .then((data, err) => {
                console.log(`Created new box:\n${data}\n`);
                res.json({id: data._id});
            })
            .catch(err => {
                res.json({err: err});
            });
    });

// GET /box/:id
router.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        getBox(id)
            .then((data, err) => {
                console.log(`Fetching box:\n${data}\n`);
                res.json({_id: data._id, title: data.title, filename: data.filename});
            })
            .catch(err => {
                res.json({err: err});
            });
    });

// DEL /box/:id
router.route('/:id')
    .delete(async (req, res) => {
        const id = req.params.id;
        deleteBox(id)
            .then((data, err) => {
                console.log(`Nuked box:\n${data}\n`);
                res.json({msg: `${data._id} deleted.`});
            })
            .catch(err => {
                res.json({err: err});
            });
    });


module.exports = router;