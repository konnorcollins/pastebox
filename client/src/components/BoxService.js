import axios from 'axios';

export default class BoxService 
{
    add(title, text, callback)
    {
        axios.post('http://localhost:8080/box', 
        {
            title: title,
            text: text
        })
            .then(response => {
                callback(response.data);
            })
            .catch(err => {
                console.log(err);
                callback(null);
            });
    }

    get(id, callback)
    {
        axios.get(`http://localhost:8080/box/${id}`)
            .then(response => {
                callback(response.data);
            })
            .catch(err => {
                console.log(err);
                callback(null);
            })
    }

    delete(id, callback)
    {
        axios.delete(`http://localhost:8080/box/${id}`)
            .then(response => {
                callback(response.data);
            })
            .catch(err => {
                console.log(err);
                callback(null);
            });
    }

}