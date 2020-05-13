// models/Box.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Box = new Schema(
    {
        uuid: String,
        filename: String
    }
    ,{
        collection: 'Boxes' 
    });

module.exports = mongoose.model('Box', Box);