import * as React from "react";
import Login from "../components/login/login";

export default class LoginPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home-container'>
                <div className='text-container'>
                    <h1 className='title'>Login</h1>
                    <Login loginOrOut={this.props.loginOrOut} isAuthenticated={this.props.isAuthenticated}/>
                </div>
            </div>
        )
    }
}