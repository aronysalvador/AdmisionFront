const axios = require('axios');

const get = (config) =>{
    return new Promise ((resolve, reject) => {
        axios.get(config.url,config.headers).then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject({})
            });
        });
}
module.exports = get