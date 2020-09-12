import React from 'react';
import UploadButton from './UploadButton'
import Button from 'react-bootstrap/Button'
import LandingPageStyles from '../pages/LandingPage.module.css'
import { API_URL } from '../config'

class UploadBox extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            files:[],
            successfullUploaded: false,
            uploading: false,
            userId : ''
        }
        this.upload = this.upload.bind(this);

        // let array = window.history.state.files;
        // this.state = array; 
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.state.files = this.fileListToArray(window.history.state.files)
        this.sendRequest = this.sendRequest.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            userId: e.target.value
        })
        console.log(this.state.userId)
    }

    async upload() {
        // console.log(this.state);
        // console.log(typeof(this.state))
        // console.log(window.history.state.files)
        // console.log(typeof(window.history.state.files))
       
        console.log(this.state.files.length)
        const promises = [];

        this.state.files.forEach(file => {
            promises.push(this.sendRequest(file));
          });
      
        try {
            await Promise.all(promises);
            this.setState({ successfullUploaded: true, uploading: false });
          } catch (e) {
            // Not Production ready! Do some error handling here instead...
            this.setState({ successfullUploaded: true, uploading: false });
        }
        // this.sendRequest(this.state.files[0]); 
    }

    onFilesAdded(files) {
        this.setState(prevState => ({
          files: prevState.files.concat(files)
        }));
    }

    async uploadFiles() {

    }

    sendRequest(file){
        return new Promise((resolve, reject) => {

            // const req = new XMLHttpRequest();
            const formData = new FormData();
            formData.append("file", file, file.name);
            formData.append("userId", this.state.userId);
            // req.open("POST", "http://localhost:8080/image-upload");
            // req.send(formData);

            fetch(`${API_URL}/image-upload`, {
                method:'POST',
                body: formData
            }).then(res => {
                console.log(res) 
            })
            
        })
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    render() {
        return (
            <div>
                <UploadButton uploadPage={LandingPageStyles.uploadButton} uploadButton ={LandingPageStyles.inactive} onFilesAdded={this.onFilesAdded}/>
                {this.state.files.map(file => {
                    return (
                        <div key={file.name} className="Row">
                            <span className="Filename">{file.name}</span>
                            {/* {this.renderProgress(file)} */}
                        </div>
                    );
                })}
                <p style={{color: "black"}} >Instagram Username</p>
                <input  value = {this.state.userId} onChange= {this.handleChange} placeholder="e.x. cottageCore"></input>
                <button onClick={this.upload}>Upload</button>
            </div>
        )
    }
}

//
export default UploadBox 