import * as React from "react";
import "./ImageGallery.css";
import { config } from "../../Helpers/config";
import ImagePart from "./Image-Part";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images : []
        }
    }

    componentDidMount()
    {
        fetch(config.apiUrl + "/api/images",
            {
                method: 'GET'
            })
            .then(res => res.json())
        .then((data) =>
        {
            this.setState({ images: data });
            { console.log(data) }
        })
        .catch(console.log)
    }
    
    render() {
        if (this.state.images.length === 0) {
            return (<div><h1>Images not found</h1></div>);
        }
        
        const images_list = this.state.images.map( (element) => {
            return (
                <div key={element.imageId}>
                    <ImagePart image={element} />
                </div>
            );
        });
        return (
            <div>
                <div className="gallery-images-container">
                    {images_list}
                </div>
            </div>
        )
    };
}