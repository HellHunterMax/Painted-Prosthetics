import { Config } from '../../helpers/config';

export const userService = {
    login,
    logout
};

function login(name, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
    };

    return fetch(Config.apiUrl + '/api/users/authenticate', requestOptions)
        .then(user => {
            console.log("request succeded.")
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                console.log("placed user into localstorage.")
            }
            else {
                console.log("did not place user in localstorage.")
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
        console.log("logging out user" + { localStorage.getItem("user") });
    }
    localStorage.removeItem('user');
}