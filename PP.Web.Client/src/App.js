import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Donate from "./pages/donate";
import Artist from "./pages/artist";
import Admin from "./pages/admin";
import { UserService } from "./helpers/user-service";
import { PrivateRoute } from "./components/private-route";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./app.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: UserService.IsAuthenticated(),
        };
        this.loginChange = this.loginChange.bind(this);
    }

    loginChange() {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
    }

    render() {
        return (
        <Router>
            <div className="app">
                <Navbar isAuthenticated={this.state.isAuthenticated} />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/donate">
                        <Donate />
                    </Route>
                    <Route path="/login">
                        <Login loginOrOut={() => this.loginChange} />
                    </Route>
                    <PrivateRoute exact path="/admin" component={Admin} />
                    <Route path="/artist/:id" component={Artist} />
                    <Route path="/">
                        <Gallery />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )};
}