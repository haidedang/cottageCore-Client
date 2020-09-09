import React from 'react'; 
import LandingPageStyles from './LandingPage.module.css'

class LandingPage extends React.Component {
    render (){
        return (
            <div className = {LandingPageStyles.wrapper} >
                <div className = {LandingPageStyles.image}>
                </div>
            </div>
        )

    }
    
}

export default LandingPage