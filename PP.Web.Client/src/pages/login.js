import * as React from "react";
import Login from "../components/login/login";

export default class LoginPage extends React.PureComponent {
    render() {
        return (
            <div className='home-container'>
                <div className='text-container'>
                    <h1 className='title'>Login</h1>
                    <Login/>
                </div>
            </div>
        )
    }
}