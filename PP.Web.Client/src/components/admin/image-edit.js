import * as React from "react";
import { Config } from "../../helpers/config";
import { ImageService } from "../../helpers/image-service";

export default class ImageEdit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            name: "",
            artistId: 0,
            uri: "",
            imageId: 0,
            submitted: false,
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.setState({
            name: this.props.image.name,
            artistId: this.props.image.artistId,
            uri: this.props.image.uri,
            imageId: this.props.image.imageId
        });
        {console.log(this.state)}
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });

        const { name, artistId, uri, imageId } = this.state;
        if (name && artistId && uri && imageId) {
            ImageService.put(name, artistId, uri, imageId)
                .catch(err => {
                    this.setState({ errorMessage: err.message });
                });
        }
        
    }

    render() {
        const { name, artistId, uri, submitted, errorMessage } = this.state;
        return (
        <div className="image-edit-wrapper">
            <form name="form" >
                    <label className="editLabel" htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                    <label className="editLabel" htmlFor="artistId">Artist ID:</label>
                <input type="text" className="form-control" name="artistId" value={artistId} onChange={this.handleChange} />
                    <label className="editLabel" htmlFor="uri">Url:</label>
                <input type="text" className="form-control" name="uri" value={uri} onChange={this.handleChange} />
                    <button className="btn btn-primary" onClick={this.handleSubmit()}>Change!</button>
                {errorMessage &&
                    <div className="help-block">{errorMessage}</div>
                }
            </form>
                <img className="example-old-image" src={this.props.image.uri} alt={this.props.image.name} />
        </div>
        )
    }
}