import * as React from "react";
import ImageEdit from "./image-edit";
import ImageAdd from "./image-add";
import { Config } from "../../helpers/config";

//TODO link the ImageManagement up
//TODO create form
//TODO create a fetch
//TODO or create different page to change single image or make possible on this page.

export default class ImageManagement extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            editImageId: 0,
            editClicked: false,
            addClicked: false
        }
    }

    componentDidMount() {
        fetch(Config.apiUrl + "/api/images",
            {
                method: "GET"
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ images: data });
            })
            .catch(console.log)
    }
    render() {
        if (this.state.images.length === 0) {
            return (<div><h1>Images not found</h1></div>);
        }

        const imagesList = this.state.images.map((element, index) => {
            return (
                <tr key={element.imageId}>
                    <td>{element.name}</td>
                    <td>{element.artistId}</td>
                    <td>{element.addDate}</td>
                    <td>{element.uri}</td>
                    <td>{element.likes}</td>
                    <td><button onClick={() => this.setState({ editClicked: !this.state.editClicked, editImageId: index })}>edit</button></td>
                </tr>
            );
        });

        return (
            <div className=''>
                <div className='text-container'>
                    <h1 className='title'>Image Management</h1>
                    {!(this.state.editClicked || this.state.addClicked) && imageTable(imagesList)}
                    {!(this.state.editClicked || this.state.addClicked) && <button onClick={() => this.setState({ addClicked: !this.state.addClicked })}>Add</button>  }
                    {this.state.editClicked && <ImageEdit image={this.state.images[this.state.editImageId]} />}
                    {this.state.addClicked && <ImageAdd />}
                    
                </div>
            </div>
        )
    }
}

function imageTable(imagesList) {
    return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>ArtistId</th>
                <th>AddDate</th>
                <th>Uri</th>
                <th>likes</th>
            </tr>
        </thead>
        <tbody>
            {imagesList}
        </tbody>
        </table>
        )
}