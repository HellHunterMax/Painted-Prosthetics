import * as React from "react";
import ImagePart from "./image-part";
import { Config } from "../../helpers/config";
import "./image-gallery.css";

export default class ImageGallery extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            images : []
        }
    }

    componentDidMount()
    {
        fetch(Config.apiUrl + "/api/images",
            {
                method: "GET"
            })
            .then(res => res.json())
        .then((data) =>
        {
            this.setState({ images: data });
        })
        .catch(console.log)
    }
    
    render() {
        if (this.state.images.length === 0) {
            return (<div><h1>Images not found</h1></div>);
        }
        
        const imagesList = this.state.images.map( (element) => {
            return (
                <div key={element.imageId}>
                    <ImagePart image={element} />
                </div>
            );
        });
        return (
            <div>
                <div className="gallery-images-container">
                    {imagesList}
                </div>
            </div>
        )
    };
}