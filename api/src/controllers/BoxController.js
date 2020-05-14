// controllers/BoxController.js
import BoxService from '../services/BoxService'

export default class BoxController 
{
    async createNewBox(data) 
    {
        // generate random name for file
        // create file on system
        // create box model on db
        // return id

        let name = ""; // todo: random name generation
        let item = await BoxService.createBox(data);
        return item._id;
    }

    async readBox(id) 
    {
        let item = await BoxService.getBox(id);
        // todo: return data from file mapped to id
        return "";
    }

    async deleteBox(id) 
    {
        let item = await BoxService.deleteBox(id);
        // todo: remove file on system mapped to id
        return {msg: removed};
    }
}