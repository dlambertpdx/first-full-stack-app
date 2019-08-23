const URL = '/api';

export function getHorror() {  

    const url = `${URL}/horrors`;
    return fetch(url)
        .then(response => response.json());
}

export function getHorror(id) {  
    const url = `${URL}/horrors/${id}`;
    return fetch(url)
        .then(response => response.json());
}

export function addHorror(horror) {
    const url = `${URL}/horrors`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(horror)
    })
        .then(response => response.json());
}

export function getGenres() {
    const url = `${URL}/genres`;
    return fetch(url)
        .then(response => response.json());
}
