import React from 'react'
import UploadBox from '../components/UploadBox'
import uploadStyles from './uploadStyles.module.css'

class Upload extends React.Component {
    render() {
        return (
            <div className={uploadStyles.container}>
                <div className={uploadStyles.header}>Cottage Shoutouts</div>
                <UploadBox />
            </div>
        )
    }
}

export default Upload