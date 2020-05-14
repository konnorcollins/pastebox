// controllers/BoxController.js
import BoxService from '../services/BoxService'

const fs = require('fs');
const { nanoid } = require('nanoid');

export default class BoxController 
{
    async createNewBox(data) 
    {
        /* generate random name for file
         create file on system
         create box model on db
         return id
        */

        let name = nanoid(); // todo: either swap this out for readable id's or swap out Box Model's
        await fs.write(name, data);
        let item = await BoxService.createBox({filename: name});
        return item._id;
    }

    async readBox(id) 
    {
        let item = await BoxService.getBox(id);
        let result = fs.readFileSync(item.filename);
        return result;
    }

    async deleteBox(id) 
    {
        let item = await BoxService.deleteBox(id);
        await fs.unlink(item.filename);
        return "Deleted";
    }
}