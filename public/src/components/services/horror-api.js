const URL = '/api';

export function getHorror() {  

    const url = `${URL}/horror`;
    const fetch = require('node-fetch');
    return fetch(url)
        .then(response => response.json());
}