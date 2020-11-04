import * as React from "react";
import ArtistGallery from "../components/galleries/artist-gallery";
import { Config } from "../helpers/config";
import "./artist-page.css";

export default class Artist extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            artist: Object,
            isLoading: true
        }
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        fetch(Config.apiUrl + "/api/artists/" + id,
            {
                method: "GET"
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ artist: data, isLoading: false });
            })
            .catch(console.log)
    }

    render() {
        if (this.state.isLoading) {
            return (<h1>LOADING</h1>
                )
        }
        let str1 = "mailto:" + this.state.artist.email
        return (
            <div className="home-container">
                <div className="text-container">
                    <h1 className="title">Artist Gallery</h1>
                    <div className="gallery-container">
                        <ArtistGallery images={this.state.artist.images} />
                    </div>
                    <div className="artist-info">
                        <h1 className="artistName">{this.state.artist.name}</h1>
                        <a className="websiteLink" href={this.state.artist.website}>{this.state.artist.website}</a>
                        <p className="bio">{this.state.artist.bio}</p>
                        <a className="contact-button btn btn--large" href={str1} rel="noopener noreferrer">
                            Contact
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}