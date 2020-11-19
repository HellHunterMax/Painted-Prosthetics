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

        this.deleteClicked = this.deleteClicked.bind(this);
        this.getImages = this.getImages.bind(this);
    }

    deleteClicked() {
        this.setState({ deleteClicked: !this.state.deleteClicked });
        this.getImages()
    }

    addClickedAndRefresh() {
        this.setState({ addClicked: !this.state.addClicked });
        this.getImages()
    }
    editClickedAndRefresh() {
        this.setState({ editClicked: !this.state.editClicked });
        this.getImages();
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
        this.getImages()
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
                    {this.state.editClicked && <button onClick={() => this.editClickedAndRefresh()} >Back</button>}
                    {this.state.addClicked && <button onClick={() => this.addClickedAndRefresh()}>Back</button>}
                    {!(this.state.editClicked || this.state.addClicked || this.state.deleteClicked) && imageTable(imagesList)}
                    {!(this.state.editClicked || this.state.addClicked || this.state.deleteClicked) && <button onClick={() => this.setState({ addClicked: !this.state.addClicked })}>Add</button>  }
                    {this.state.editClicked && <ImageEdit image={this.state.images[this.state.editImageId]} />}
                    {this.state.addClicked && <ImageAdd />}
                    {this.state.deleteClicked && <ImageDelete image={this.state.images[this.state.editImageId]} deleteClicked={this.deleteClicked} />}
                    
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