// controllers/BoxController.js
const fs = require('fs');
const { nanoid } = require('nanoid');
const BoxService = require('../services/BoxService');

class BoxController 
{
    static async createNewBox(data) 
    {
        /* generate random name for file
         create file on system
         create box model on db
         return id
        */

        let name = nanoid(); // todo: either swap this out for readable id's or swap out Box Model's
        await fs.writeFile(name, data);
        let item = await BoxService.createBox({filename: name});
        return item._id;
    }

    static async readBox(id) 
    {
        let item = await BoxService.getBox(id);
        let result = fs.readFileSync(item.filename);
        return result;
    }

    static async deleteBox(id) 
    {
        let item = await BoxService.deleteBox(id);
        await fs.unlink(item.filename);
        return "Deleted";
    }
}

module.exports = BoxController;