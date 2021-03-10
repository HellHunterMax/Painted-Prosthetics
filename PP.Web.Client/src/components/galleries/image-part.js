import * as React from "react";
import { Link } from "react-router-dom";

export default class ImagePart extends React.PureComponent {
    render() {
        return (
            <div className="image-container">
                <Link to={{ pathname: "/artist/" + this.props.image.artistId }}>
                    <img className="gallery-image" src={this.props.image.uri} alt={this.props.image.name} />
                </Link>
            </div>
        )
    }
}