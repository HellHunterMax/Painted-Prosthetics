export const UserService = {
    IsAuthenticated,
    Token
}

function IsAuthenticated() {
    const isThereAUser = localStorage.getItem('user') ? true : false;
    return isThereAUser;
}

function Token() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.token;
}