import * as React from "react";
import ImageGallery from "../components/galleries/image-gallery";

class Gallery extends React.PureComponent {
    render() {
        return (
            <div className="home-container">
                <div className="text-container">
                    <h1 className="title">Gallery</h1>
                </div>
                <ImageGallery />
            </div>
        )
    }
}
export default Gallery