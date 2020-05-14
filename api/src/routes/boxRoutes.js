// routes/boxRoutes.js

const express = require('express');
const router = express.Router();

// Box Schema
const Box = require('../models/Box');


// POST /box
router.route('')
    .post(async (req, res) => {
    });

// GET /box/:id
router.route('/:id')
    .get(async (req, res) => {
    });

// DEL /box/:id
router.route('/:id')
    .delete(async (req, res) => {
    });


module.exports(router);