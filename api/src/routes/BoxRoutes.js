// routes/boxRoutes.js

const express = require('express');
const router = express.Router();
const {createBox, getBox, deleteBox} = require('../services/BoxService');
const { nanoid } = require('nanoid');
const fs = require('fs');

// Box Schema
const Box = require('../models/Box');


// POST /box
router.route('')
    .post((req, res) => {
        const title = req.body.title; // title of box
        const text = req.body.text; // text contents
        const filename = `${nanoid()}.txt`;
        createBox({title: title, filename: filename})
            .then((data, err) => {
                console.log(`Created new box:\n${data}\n`);
                fs.writeFileSync(filename, text);
                res.json({_id: data._id});
            })
            .catch(err => {
                res.json({err: `Failed to create box!\n`});
            });
    });

// GET /box/:id
router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        getBox(id)
            .then((item, err) => {
                console.log(`Fetching box:\n${item}\n`);
                let data = fs.readFileSync(item.filename);
                res.json({_id: item._id, title: item.title, filename: item.filename, text: data.toString()});
            })
            .catch(err => {
                res.json({err: `Box ${id} does not exist!`});
            });
    });

// DEL /box/:id
router.route('/:id')
    .delete((req, res) => {
        const id = req.params.id;
        deleteBox(id)
            .then((item) => {
                console.log(`Nuking box:\n${item}\n`);
                fs.unlinkSync(item.filename);
                res.json({msg: `${item._id} deleted.`});
            })
            .catch(err => {
                console.err(err.toString());
                res.json({err: `Failed to delete box ${id} from db and disk!`});
            });
    });


module.exports = router;