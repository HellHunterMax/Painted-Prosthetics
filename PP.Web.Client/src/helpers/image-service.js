import { Config } from './config';

export const ImageService = {
    post,
    put
};

function post(name, artistId, uri) {
    let user = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + user.token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, artistId, uri })
    };

    return fetch(Config.apiUrl + '/api/images/' , requestOptions);
}

function put(name, artistId, uri, imageId) {
    let user = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
        method: 'PUT',
        headers: {'Authorization': 'Bearer ' + user.token,  'Content-Type': 'application/json' },
        body: JSON.stringify({ name, artistId, uri })
    };

    return fetch(Config.apiUrl + '/api/images/' + imageId, requestOptions);
}