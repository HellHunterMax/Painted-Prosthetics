import { Config } from "./config";

export const ImageService = {
    post,
    put,
    _delete
};

function post(name, artistId, uri) {
    const user = JSON.parse(localStorage.getItem("user"));
    const requestOptions = {
        method: "POST",
        headers: { "Authorization": "Bearer " + user.token, "Content-Type": "application/json" },
        body: JSON.stringify({ name, artistId, uri })
    };

    return fetch(Config.apiUrl + "/api/images/" , requestOptions);
}

function put(name, artistId, uri, imageId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const requestOptions = {
        method: "PUT",
        headers: {"Authorization": "Bearer " + user.token,  "Content-Type": "application/json" },
        body: JSON.stringify({ name, artistId, uri })
    };

    return fetch(Config.apiUrl + "/api/images/" + imageId, requestOptions);
}

function _delete(imageId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const requestOptions = {
        method: "DELETE",
        headers: { "Authorization": "Bearer " + user.token, "Content-Type": "application/json" },
    };

    return fetch(Config.apiUrl + "/api/images/" + imageId, requestOptions);
}