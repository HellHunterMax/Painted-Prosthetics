import * as React from "react";
import { ArtistService } from "../../helpers/artist-service";

export default class ArtistAdd extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            bio: "",
            website: "",
            email: "",
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

        const { name, bio, webiste, email } = this.state;
        if (name && bio && webiste && email) {
            console.log("Sending API Call POST");
            ArtistService.post(name, bio, webiste, email)
                .catch(err => {
                    this.setState({ errorMessage: err.message });
                });
        };
        this.props.uploadClicked();
    }

    //TODO add completed MSG to artistUpload
    render() {
        const { name, bio, website, email, submitted, errorMessage } = this.state;
        return (
            <div className="image-edit-wrapper">
                <h1>Add an artist</h1>
                <form name="form" >
                    <label className="editLabel" htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                    {submitted && !name &&
                        <div className="help-block">Name is required</div>
                    }
                    <label className="editLabel" htmlFor="bio">Bio:</label>
                    <input type="text" className="form-control" name="bio" value={bio} onChange={this.handleChange} />
                    {submitted && !bio && <div className="help-block">Bio is required</div>}

                    <label className="editLabel" htmlFor="website">Website:</label>
                    <input type="text" className="form-control" name="website" value={website} onChange={this.handleChange} />
                    {submitted && !website && <div className="help-block">Website is required</div>}

                    <label className="editLabel" htmlFor="email">Email:</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                    {submitted && !email && <div className="help-block">E-mail is required</div>}

                    <div>
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Upload!</button>
                    </div>
                    {errorMessage &&
                        <div className="help-block">{errorMessage}</div>
                    }
                </form>
            </div>
        )
    }
}