import * as React from "react";
import { ArtistService } from "../../helpers/artist-service";

export default class ArtistEdit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            artist: this.props.artist,
            name: "",
            bio: "",
            website: "",
            email: "",
            artistId: 0,
            submitted: false,
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.setState({
            name: this.props.artist.name,
            bio: this.props.artist.bio,
            website: this.props.artist.website,
            email: this.props.artist.email,
            artistId: this.props.artist.artistId
        });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });

        const { name, bio, website, email, artistId } = this.state;
        if (name && artistId && bio && website && email) {
            console.log("Sending API Call PUT");
            ImageService.put(name, bio, website, email, artistId)
                .catch(err => {
                    this.setState({ errorMessage: err.message });
                });
        };
        this.props.changeClicked();
    }

    //TODO show uploaded MSG!
    render() {
        const { name, bio, website, email, submitted, errorMessage } = this.state;
        return (
            <div className="artist-edit-wrapper">
                <form name="form" >
                    <label className="editLabel" htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />

                    <label className="editLabel" htmlFor="bio">Bio:</label>
                    <input type="text" className="form-control" name="bio" value={bio} onChange={this.handleChange} />

                    <label className="editLabel" htmlFor="website">Website:</label>
                    <input type="text" className="form-control" name="website" value={website} onChange={this.handleChange} />

                    <label className="editLabel" htmlFor="email">E-mail:</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />

                    <button className="btn btn-primary" onClick={this.handleSubmit}>Change!</button>
                    {errorMessage && <div className="help-block">{errorMessage}</div>}
                </form>
            </div>
        )
    }
}