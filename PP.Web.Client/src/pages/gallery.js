import * as React from "react";
import ImageGallery from "../components/galleries/image-gallery";

class Gallery extends React.PureComponent {
    render() {
        return (
            <div className="home-container">
                <ImageGallery />
            </div>
        )
    }
}
export default Gallery