import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "../galleries/carousel.css";

export default class ArtistGallery extends React.PureComponent {
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

        const imagesList = this.props.images.map((element) => {
            return (
                <div key={element.imageId}>
                    <img src={element.uri} alt={element.name} />
                    <p className={this.state.clicked ? 'legend' : "legend-hide"} >{element.name}</p>
                </div>
            );
        });
        return (
            <div>
                <Carousel transitionTime="500" infiniteLoop
                    onClickItem={() => { this.onClickItemEvent() }}
                    dynamicHeight={true}
                >
                    {imagesList}
                </Carousel>
            </div>
        )
    };
}