// services/boxService.js

const Box = require('../models/Box');

/* Basic wrapper for Box db */
export default class BoxService 
{

    async CreateBox(data)
    {

        // TODO: allocate

        // TODO: generate a box with a readable identifier
        const item = await Box.create({
            
        });

        // TODO: return id to client
    }

    async GetBox(id)
    {
        const result = await Box.findById(id);
        return result;
    }

    async DeleteBox(id)
    {
        const result = await Box.findByIdAndDelete(id);
        // TODO: more validation
    }
}