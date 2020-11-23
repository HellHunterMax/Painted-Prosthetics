import * as React from 'react';
import ArtistEdit from "./artist-edit";
import ArtistAdd from "./artist-add";
import ArtistDelete from "./artist-delete";
import { ArtistService } from "../../helpers/artist-service";

//TODO link the ArtistManagement page up
export default class ArtistManagement extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            editArtistId: 0,
            editClicked: false,
            addClicked: false,
            deleteClicked: false
        }

        this.handleDeleteClicked = this.handleDeleteClicked.bind(this);
        this.handleAddClicked = this.handleAddClicked.bind(this);
        this.handleEditClicked = this.handleEditClicked.bind(this);
        this.getArtists = this.getArtists.bind(this);
    }

    artistsTable(artistsList) {
        this.getArtists();
        return (
            <table>
                <thead>
                    <tr>
                        <th>ArtistId</th>
                        <th>Name</th>
                        <th>Bio</th>
                        <th>Website</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {artistsList}
                </tbody>
            </table>
        )
    }

    handleDeleteClicked() {
        this.setState({ deleteClicked: !this.state.deleteClicked });
    }
    handleAddClicked() {
        this.setState({ addClicked: !this.state.addClicked });
    }
    handleEditClicked() {
        this.setState({ editClicked: !this.state.editClicked });
    }

    getArtists() {
        ArtistService.get()
            .then(res => res.json())
            .then((data) => {
                this.setState({ artists: data });
            })
            .catch(console.log)
    }

    componentDidMount() {
        this.getArtists()
    }
    render() {
        if (this.state.artists.length === 0) {
            return (<div><h1>Artists not found</h1></div>);
        }

        const artistsList = this.state.artists.map((element, index) => {
            return (
                <tr key={element.artistId}>
                    <td>{element.artistId}</td>
                    <td>{element.name}</td>
                    <td>{element.bio}</td>
                    <td>{element.website}</td>
                    <td>{element.email}</td>
                    <td><button onClick={() => this.setState({ editClicked: !this.state.editClicked, editArtistId: index })}>edit</button></td>
                    <td><button onClick={() => this.setState({ deleteClicked: true, editArtistId: index })}>Delete</button></td>
                </tr>
            );
        });

        return (
            <div className=''>
                <div className='text-container'>
                    <h1 className='title'>Artist Management</h1>
                    {this.state.editClicked && <button onClick={this.handleEditClicked} >Back</button>}
                    {this.state.addClicked && <button onClick={this.handleAddClicked}>Back</button>}
                    {!(this.state.editClicked || this.state.addClicked || this.state.deleteClicked) && this.artistsTable(artistsList)}
                    {!(this.state.editClicked || this.state.addClicked || this.state.deleteClicked) && <button onClick={this.handleAddClicked}>Add</button>}
                    {this.state.editClicked && <ArtistEdit artist={this.state.artists[this.state.editArtistId]} changeClicked={this.handleEditClicked} />}
                    {this.state.addClicked && <ArtistAdd uploadClicked={this.handleAddClicked} />}
                    {this.state.deleteClicked && <ArtistDelete artist={this.state.artists[this.state.editArtistId]} deleteClicked={this.handleDeleteClicked} />}

                </div>
            </div>
        )
    }
}