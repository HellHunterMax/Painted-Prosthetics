import * as React from 'react';
import './artist-page.css';
import ArtistGallery from "../components/ArtistGallery/artistGallery";
import { config } from "../Helpers/config";
import { useParams } from "react-router-dom";

export default class artist extends React.PureComponent {
    constructor(props) {
        super(props);
        let { id } = this.props.match.params;
        console.log(id);
        this.state = {
            Artist: Object,
            isLoading: true
        }
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        fetch(config.apiUrl + "/api/artists/" + id,
            {
                method: 'GET'
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ Artist: data, isLoading: false });
                { console.log(data) }
            })
            .catch(console.log,
                this.setState({ Artist: { "artistId": 2, "name": "kim", "images": [{ "imageId": 7, "name": "kimpic1", "artistId": 2, "addDate": "2020-01-01T00:00:00", "likes": 1, "uri": "https://picsum.photos/700/400?img=3" }], "bio": "Hello my bio is about me!", "website": "www.youtube.com", "email": "me@me.nl" }, isLoading: false })
        )
    }

    render() {
        if (this.state.isLoading) {
            return (<h1>LOADING</h1>
                )
        }
        let str1 = "mailto:" + this.state.Artist.email
        return (
            <div className='home-container'>
                <div className='text-container'>
                    <h1 className='title'>Artist Gallery</h1>
                    <div className="gallery-container">
                        <ArtistGallery images={this.state.Artist.images} />
                    </div>
                    <div className="artist-info">
                        <h1 className="artistName">{this.state.Artist.name}</h1>
                        <a className="websiteLink" href={this.state.Artist.website}>{this.state.Artist.website}</a>
                        <p className="bio">{this.state.Artist.bio}</p>
                        <a className="contact-button btn btn--large" href={str1} rel="noopener noreferrer">
                            Contact
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

function test () {
    
}