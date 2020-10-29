import * as React from "react";
import { Link } from "react-router-dom";

export default class ImagePart extends React.Component {
    render() {
        let theArtistId = this.props.image.artistId;
        return (
            <div className="image-container">
                <Link to={{ pathname: "/artist/" + theArtistId }}>
                    <img className="gallery-image" src={this.props.image.uri} alt={this.props.image.name} />
                </Link>
            </div>
        )
    }
}