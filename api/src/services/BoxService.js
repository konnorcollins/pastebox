// services/BoxService.js

const Box = require('../models/Box');

/* Basic wrapper for Box db */
class BoxService 
{

    static async createBox(data)
    {
        const item = await Box.create(data);
        return item;
    }

    static async getBox(id)
    {
        const item = await Box.findById(id);
        return item;
    }

    static async deleteBox(id)
    {
        const result = await Box.findByIdAndDelete(id);
        return result;
    }
}

module.exports = BoxService;