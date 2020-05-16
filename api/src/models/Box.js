// models/Box.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { nanoid } = require('nanoid');

const Box = new Schema(
    {
        _id: 
        {
            type: String,
            default: () => nanoid()
        },
        title:
        {
            type: String
        },
        filename:
        {
            type: String
        }
    }
    ,{
        collection: 'Boxes' 
    });

module.exports = mongoose.model('Box', Box);