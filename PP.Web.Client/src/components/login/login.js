import React from "react";
import { userService } from "./user-service";
//import { connect } from 'react-redux';

//import { userActions } from '../_actions';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        userService.logout();

        this.state = {
            username: "",
            password: "",
            submitted: false,
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password} = this.state;
        if (username && password)
        {
            userService.login(username, password)
                .then(console.log(localStorage.getItem("user")))
                .catch(err => {
                    this.setState({ errorMessage: err.message });
                });
        }
}

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted, errorMessage } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={"form-group" + (submitted && !username ? " has-error" : "")}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={"form-group" + (submitted && !password ? " has-error" : "")}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {errorMessage &&
                            <div className="help-block">{errorMessage}</div>
                        }
                        { loggingIn }
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

//const connectedLoginPage = connect(mapStateToProps)(Login);
//export { connectedLoginPage as Login }; 