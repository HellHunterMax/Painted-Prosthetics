import { Config } from '../../helpers/config';

export const UserService = {
    login,
    logout
};

async function login(name, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    };

        

    

    var response = await fetch(Config.apiUrl + '/api/users/authenticate', requestOptions).then(body);

    var body = await response.json(); // .json() is asynchronous and therefore must be awaited

    if (body) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', body);
        console.log("placed user into localstorage.");
    }
    else {
        console.log("did not place user in localstorage.")
    }

    return body
}

function logout() {
    // remove user from local storage to log user out
    let user = []
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
        user = localStorage.getItem("user");
        console.log("logging out user" + user.name);
    }
    localStorage.removeItem('user');
}