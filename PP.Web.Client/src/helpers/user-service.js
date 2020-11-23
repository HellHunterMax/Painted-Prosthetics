export const UserService = {
    isAuthenticated,
    Token
}

function isAuthenticated() {
    return localStorage.getItem('user') ? true : false;
}

function Token() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.token;
}