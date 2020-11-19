import * as React from "react";
import { ImageService } from "../../helpers/image-service";

export default class ImageAdd extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            artistId: 0,
            uri: "",
            submitted: false,
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });

        const { name, artistId, uri} = this.state;
        if (name && artistId && uri) {
            console.log( "Sending API Call POST" );
            ImageService.post(name, artistId, uri)
                .catch(err => {
                    this.setState({ errorMessage: err.message });
                });
        }
    }

    //TODO add completed MSG!
    render() {
        const { name, artistId, uri, submitted, errorMessage } = this.state;
        return (
            <div className="image-edit-wrapper">
                <h1>Add a image</h1>
            <form name="form" >
                    <label className="editLabel" htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                    {submitted && !name &&
                        <div className="help-block">Name is required</div>
                    }
                    <label className="editLabel" htmlFor="artistId">Artist ID:</label>
                    <input type="text" className="form-control" name="artistId" value={artistId} onChange={this.handleChange} />
                    {submitted && !artistId &&
                        <div className="help-block">Artist ID is required</div>
                    }
                    <label className="editLabel" htmlFor="uri">Url:</label>
                    <input type="text" className="form-control" name="uri" value={uri} onChange={this.handleChange} />
                    {submitted && !uri &&
                        <div className="help-block">URL is required</div>
                    }
                    <div>
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Upload!</button>
                    </div>
                {errorMessage &&
                    <div className="help-block">{errorMessage}</div>
                }
            </form>
                <img className="example-old-image" src={uri} alt={name} />
        </div>
        )
    }
}