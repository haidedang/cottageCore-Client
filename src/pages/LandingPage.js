import React from 'react';
import LandingPageStyles from './LandingPage.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import UploadButton from  '../components/UploadButton'

class LandingPage extends React.Component {
    
    render() {
        return (
            <div className={LandingPageStyles.wrapper} >
                <div className={LandingPageStyles.image}>
                    <div className={LandingPageStyles.container}>
                        <div>
                            <h1>Cottage Shoutouts</h1>
                        </div>
                        <div>
                            <p className={LandingPageStyles.landingText}>Let's build a cottage core community together! Every week we will select five of your submitted pictures and share them on our Instagram Channel</p>
                        </div>
                    </div>

                    <div className={LandingPageStyles.svg}>
                    </div>

                </div>

                {/* <div className = {LandingPageStyles.upload}>
                    <div className= {LandingPageStyles.add}>
                        
                    </div>
                    <h2>Upload your picture!</h2>
                    <input></input>
                    <button className={LandingPageStyles.button}>Submit</button>
                </div> */}


                <div className={LandingPageStyles.weeklyHeading}>
                    <h1> - Weekly Theme - </h1>
                </div>

                <div className={LandingPageStyles.wrapperCarousel} >

                    <Carousel className={LandingPageStyles.carousel}>

                        <Carousel.Item>
                            <div className={LandingPageStyles.image1}></div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={LandingPageStyles.image1}></div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className={LandingPageStyles.image1}></div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>

                <Container className={LandingPageStyles.requirements}>


                    <div className={LandingPageStyles.wrapperHeading}>
                        <div className={LandingPageStyles.requirementsImage}>
                        </div>
                    </div>
                    <Row xs={1}>
                        <Col className={LandingPageStyles.col} >
                            <div className={LandingPageStyles.frameIcon}>
                            </div>
                            <p> 9:16 or 4:5 format</p>
                        </Col>

                        <Col className={LandingPageStyles.col} >
                            <div className={LandingPageStyles.photoIcon}>
                            </div>
                            <p> should be your own picture</p>
                        </Col>

                        <Col className={LandingPageStyles.col} >
                            <div className={LandingPageStyles.heartIcon}>
                            </div>
                            <p> not edited and high resolution</p>
                        </Col>

                        <Col className={LandingPageStyles.col} >
                            <div className={LandingPageStyles.calendarIcon}>
                            </div>
                            <p> match weekly theme</p>
                        </Col>

                    </Row>

                </Container>

                <UploadButton uploadButton={LandingPageStyles.active} path = '/upload'/> 

                {/* <div onClick={this.openFileDialog}  className={LandingPageStyles.buttonHeading}>
                    <input
                        style={{ display: 'none'}}
                        ref={this.fileInputRef}
                        className="FileInput"
                        type="file"
                        multiple
                        onChange={this.onFilesAdded}
                    />
                    <Button variant="primary" className={LandingPageStyles.text}>Submit</Button>
                </div> */}

            </div>
        )

    }

}

export default LandingPage