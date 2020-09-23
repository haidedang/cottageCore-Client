import React from 'react'
import UploadBox from '../components/UploadBox'
import uploadStyles from './uploadStyles.module.css'
import { Link } from "gatsby"

class Upload extends React.Component {
    render() {
        return (
            <div className={uploadStyles.container}>
                <div className={uploadStyles.header} >
                    <Link style={{ color: "black" }} to="/">Cottage Shoutouts
                    </Link>
                </div>
                <UploadBox />
            </div>
        )
    }
}

export default Upload