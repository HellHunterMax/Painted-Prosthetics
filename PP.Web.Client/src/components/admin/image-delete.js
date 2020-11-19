import * as React from "react";
import { ImageService } from "../../helpers/image-service";

export default class ImageDelete extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageId: 0,
            image: JSON
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });

        const { imageId} = this.state;
        if (imageId != 0) {
            console.log("Sending API Call DELETE");
            ImageService._delete(imageId)
                .catch(err => {
                    this.setState({ errorMessage: err.message });
                });
        }
        this.props.deleteClicked()
    }
    componentDidMount() {
        this.setState({
            imageId: this.props.image.imageId,
            image: this.props.image
        });
    }

    render() {
        return (
            <div>
                <h2 className="warning-msg">Are you shure you want to delete this image?</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ImageId</th>
                            <th>Name</th>
                            <th>ArtistId</th>
                            <th>AddDate</th>
                            <th>Uri</th>
                            <th>likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.imageId}</td>
                            <td>{this.state.image.name}</td>
                            <td>{this.state.image.artistId}</td>
                            <td>{this.state.image.addDate}</td>
                            <td>{this.state.image.uri}</td>
                            <td>{this.state.image.likes}</td>
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