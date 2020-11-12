const IsAuthenticated = () => {
    return localStorage.getItem('user');
}
export default IsAuthenticated