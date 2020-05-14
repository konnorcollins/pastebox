// services/BoxService.js

const Box = require('../models/Box');

/* Basic wrapper for Box db */
export default class BoxService 
{

    async createBox(data)
    {
        const item = await Box.create(data);
        return item;
    }

    async getBox(id)
    {
        const item = await Box.findById(id);
        return item;
    }

    async deleteBox(id)
    {
        const result = await Box.findByIdAndDelete(id);
        return result;
    }
}