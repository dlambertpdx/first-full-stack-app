const fetch = require('node-fetch');
const URL = '/api';

export function getHorror() {  

    const url = `${URL}/horror`;
    return fetch(url)
        .then(response => response.json());
}