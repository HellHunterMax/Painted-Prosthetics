import * as React from "react";
import ImageEdit from "./image-edit";
import ImageAdd from "./image-add";
import ImageDelete from "./image-delete";
import { Config } from "../../helpers/config";

export default class ImageManagement extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            editImageId: 0,
            editClicked: false,
            addClicked: false,
            deleteClicked: false
        }

        this.handleDeleteClicked = this.handleDeleteClicked.bind(this);
        this.handleAddClicked = this.handleAddClicked.bind(this);
        this.handleEditClicked = this.handleEditClicked.bind(this);
    }

    imageTable(imagesList) {
        this.getImages();
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

    handleDeleteClicked() {
        this.setState({ deleteClicked: !this.state.deleteClicked });
    }
    handleAddClicked() {
        this.setState({ addClicked: !this.state.addClicked });
    }
    handleEditClicked() {
        this.setState({ editClicked: !this.state.editClicked });
    }

    getImages() {
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

    componentDidMount() {
        this.getImages();
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
                    <td><button onClick={() => this.setState({ deleteClicked: true, editImageId: index })}>Delete</button></td>
                </tr>
            );
        });

        return (
            <div className=''>
                <div className='text-container'>
                    <h1 className='title'>Image Management</h1>
                    {this.state.editClicked && <button onClick={this.handleEditClicked} >Back</button>}
                    {this.state.addClicked && <button onClick={this.handleAddClicked}>Back</button>}
                    {!(this.state.editClicked || this.state.addClicked || this.state.deleteClicked) && this.imageTable(imagesList)}
                    {!(this.state.editClicked || this.state.addClicked || this.state.deleteClicked) && <button onClick={this.handleAddClicked}>Add</button>  }
                    {this.state.editClicked && <ImageEdit image={this.state.images[this.state.editImageId]} changeClicked={this.handleEditClicked} />}
                    {this.state.addClicked && <ImageAdd uploadClicked={this.handleAddClicked}/>}
                    {this.state.deleteClicked && <ImageDelete image={this.state.images[this.state.editImageId]} deleteClicked={this.handleDeleteClicked} />}
                    
                </div>
            </div>
        )
    }
}