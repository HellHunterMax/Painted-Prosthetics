import * as React from "react";
import Artists from "../components/admin/artist-management";
import Images from "../components/admin/image-management";
import "./admin.css";

export default class Admin extends React.PureComponent {
    state = {
        imagesClicked: false,
        artistsClicked: false
    }

    handleimagesClicked = () => {
        this.setState({ imagesClicked: true, artistsClicked: false })
    }
    handleartistsClicked = () => {
        this.setState({ imagesClicked: false, artistsClicked: true })
    }

    render() {
        return (
            <div className="home-container">
                <h1 className="title">Admin Controls</h1>
                <div className="admin-container">
                    <div className="navigation-container">
                        <ul>
                            <li>
                                <button onClick={this.handleimagesClicked}>Images</button>
                            </li>
                            <li>
                                <button onClick={this.handleartistsClicked}>Artists</button>
                            </li>
                        </ul>
                    </div>
                    <div className="admin-control-container">
                        {this.state.imagesClicked && <Images />}
                        {this.state.artistsClicked && <Artists />}
                    </div>
                </div>
            </div >
        )
    }
}