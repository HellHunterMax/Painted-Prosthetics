import * as React from 'react';
import ArtistGallery from "../components/ArtistGallery/artistGallery";
import { config } from "../Helpers/config";

export default class artist extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Artist: Object,
            isLoading: true
        }
    }
    componentDidMount() {
        fetch(config.apiUrl + "/api/artists/1",
            {
                method: 'GET'
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ Artist: data, isLoading: false});
                { console.log(data) }
            })
            .catch(console.log)
    }

    render() {
        if (this.state.isLoading) {
            return (<h1>LOADING</h1>
                )
        }
        return (
            <div className='home-container'>
                <div className='text-container'>
                    <h1 className='title'>Artist Gallery</h1>
                    <div className="Gallery-container">
                        {console.log(this.state.Artist.images)}
                        <ArtistGallery images={this.state.Artist.images} />
                    </div>
                    <div className="artistInfo">
                        <h1 className="artistName">{this.state.Artist.name}</h1>
                        <a className="websiteLink" href={this.state.Artist.website}>{this.state.Artist.website}</a>
                        <p className="bio">{this.state.Artist.bio}</p>
                        <a className="contact-button btn btn--large" href="mailto:{this.state.Artist.email}" rel="noopener noreferrer">
                            Contact
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}