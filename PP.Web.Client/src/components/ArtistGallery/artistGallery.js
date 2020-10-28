import * as React from 'react';
import "../ImageGallery/carousel.css";
import { Carousel } from "react-responsive-carousel";

export default class ArtistGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: true
        }
    }

    onClickItemEvent() {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        {console.log(this.props.images)}
        if (this.props.images.length === 0) {
            return (<div><h1>Images not found</h1></div>);
        }

        const images_list = this.props.images.map((element) => {
            return (
                <div key={element.imageId}>
                    <img src={element.uri} />
                    <p className={this.state.clicked ? 'legend' : "legend-hide"} >{element.name}</p>
                </div>
            );
        });
        return (
            <div>
                <Carousel transitionTime="500" infiniteLoop
                    onClickItem={() => { this.onClickItemEvent() }}
                >
                    {images_list}
                </Carousel>
            </div>
        )
    };
}