import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Donate from "./pages/donate";
import Artist from "./pages/artist";
import Admin from "./pages/admin";
import { PrivateRoute } from "./components/private-route";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./app.css";

export default function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/donate">
                        <Donate />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute exact path="/admin" component={Admin}/>
                    <Route path="/artist/:id" component={Artist} />
                    <Route path="/">
                        <Gallery />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}