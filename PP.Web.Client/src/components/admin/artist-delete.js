import * as React from "react";
import { ArtistService } from "../../helpers/artist-service";

export default class ArtistDelete extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            artistId: 0,
            artist: JSON
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });

        const { artistId } = this.state;
        if (artistId !== 0) {
            console.log("Sending API Call DELETE");
            ArtistService._delete(artistId)
                .catch(err => {
                    this.setState({ errorMessage: err.message });
                });
        }
        this.props.deleteClicked()
    }
    componentDidMount() {
        this.setState({
            artistId: this.props.artist.artistId,
            artist: this.props.artist
        });
    }

    render() {
        return (
            <div>
                <h2 className="warning-msg">Are you shure you want to delete this artist?</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Artist Id</th>
                            <th>Name</th>
                            <th>Bio</th>
                            <th>Website</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.artistId}</td>
                            <td>{this.state.artist.name}</td>
                            <td>{this.state.artist.bio}</td>
                            <td>{this.state.artist.website}</td>
                            <td>{this.state.artist.email}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={this.handleSubmit}>YES!</button>
                    <button onClick={this.props.deleteClicked}>NO!</button>
                </div>
            </div>
        )
    }
}