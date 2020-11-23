﻿import * as React from "react";
import About from "../components/admin/about-management";
import Donate from "../components/admin/donate-management";
import Artists from "../components/admin/artist-management";
import Images from "../components/admin/image-management";
import "./admin.css";

export default class Admin extends React.PureComponent {
    state = {
        aboutClicked: false,
        donateClicked: false,
        imagesClicked: false,
        artistsClicked: false
    }

    handleAboutClicked = () => {
        this.setState({ aboutClicked: true, donateClicked: false, imagesClicked: false, artistsClicked: false })
    }
    handledonateClicked = () => {
        this.setState({ aboutClicked: false, donateClicked: true, imagesClicked: false, artistsClicked: false })
    }
    handleimagesClicked = () => {
        this.setState({ aboutClicked: false, donateClicked: false, imagesClicked: true, artistsClicked: false })
    }
    handleartistsClicked = () => {
        this.setState({ aboutClicked: false, donateClicked: false, imagesClicked: false, artistsClicked: true })
    }

    render() {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        return (

            
            <div className="home-container">
                <h1 className="title">Admin Controls</h1>
                <div className="admin-container">
                    <div className="navigation-container">
                        <ul>
                            <li>
                                <button onClick={this.handleAboutClicked}>About</button>
                            </li>
                            <li>
                                <button onClick={this.handledonateClicked}>Donate</button>
                            </li>
                            <li>
                                <button onClick={this.handleimagesClicked}>Images</button>
                            </li>
                            <li>
                                <button onClick={this.handleartistsClicked}>Artists</button>
                            </li>
                        </ul>
                    </div>
                    <div className="admin-control-container">
                        {this.state.aboutClicked && <About />}
                        {this.state.donateClicked && <Donate />}
                        {this.state.imagesClicked && <Images />}
                        {this.state.artistsClicked && <Artists />}
                    </div>
                </div>
            </div >
        )
    }
}