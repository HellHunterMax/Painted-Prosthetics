const IsAuthenticated = () => {
    return localStorage.getItem('user') ? true : false;
}
export default IsAuthenticated