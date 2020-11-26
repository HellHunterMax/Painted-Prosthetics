import { Config } from "./config";

export const ArtistService = {
    get,
    post,
    put,
    _delete
}

function get() {
    const requestOptions = {
        method: "GET"
    };

    return fetch(Config.apiUrl + "/api/artists", requestOptions);
}

function post(name, bio, website, email) {
    const user = JSON.parse(localStorage.getItem("user"));
    {console.log(user.token)}
    const requestOptions = {
        method: "POST",
        headers: { "Authorization": "Bearer " + user.token, "Content-Type": "application/json" },
        body: JSON.stringify({ name, bio, website, email})
    };

    return fetch(Config.apiUrl + "/api/artists", requestOptions);
}

function put(name, bio, website, email, artistId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const requestOptions = {
        method: "PUT",
        headers: { "Authorization": "Bearer " + user.token, "Content-Type": "application/json" },
        body: JSON.stringify({ name, bio, website, email })
    };

    return fetch(Config.apiUrl + "/api/artists/" + artistId, requestOptions);
}

function _delete(artistsId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const requestOptions = {
        method: "DELETE",
        headers: { "Authorization": "Bearer " + user.token, "Content-Type": "application/json" },
    };

    return fetch(Config.apiUrl + "/api/artists/" + artistsId, requestOptions);
}