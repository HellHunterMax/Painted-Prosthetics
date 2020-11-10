﻿import * as React from "react";
import Navigation from "../components/admin/navigation";
import About from "../components/admin/about-management";
import Donate from "../components/admin/donate-management";
import Artists from "../components/admin/artist-management";
import Images from "../components/admin/image-management";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./admin.css";

export default class Admin extends React.PureComponent {
    render() {
        return (
            <div className="home-container">
                <h1 className="title">Admin Contols</h1>
                <div className="admin-container">
                    <div className="navigation-container">
                        <Navigation />
                    </div>
                    <div className="switch-container">
                            <Route path="/admin/about" component={About} />
                            <Route path="/admin/donate" component={Donate} />
                            <Route path="/admin/images" component={Images} />
                            <Route path="/admin/artists" component={Artists} />
                    </div>
                </div>
            </div >
        )
    }
}