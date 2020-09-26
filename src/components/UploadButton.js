import React from 'react';
import Button from 'react-bootstrap/Button'
import {navigate} from 'gatsby';
import LandingPageStyles from '../pages/LandingPage.module.css'

class UploadButton extends React.Component{

    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
    }


    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded(evt) {
        if (this.props.disabled) return;
        const files = evt.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }

        navigate(this.props.path, {
            state: {files}
        })
        // Forward to next page 
    }
    
    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    render(){
        return (
            <div onClick={this.openFileDialog} className={LandingPageStyles.buttonHeading}>
                <input
                    style={{ display: 'none' }}
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <Button className={this.props.uploadButton}>Upload Photo</Button>
                <div className={this.props.uploadPage}></div> 
            </div>
        )
    }
}


export default UploadButton