import React from 'react';
import LandingPageStyles from './LandingPage.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import UploadButton from '../components/UploadButton'
import { MDBContainer } from 'mdbreact';
import classNames from 'classnames';



class LandingPage extends React.Component {

    render() {
        return (
            <div className={LandingPageStyles.wrapper} >
                <MDBContainer className={`${LandingPageStyles.introHeader} mt-3 mb-3 mt-lg-5 mb-lg-5`} >
                        <h1 className= {LandingPageStyles.wrapperIntro}>The Cottage Dream </h1>
                </MDBContainer>
                <div className={LandingPageStyles.image}>
                    <div className={LandingPageStyles.container}>
                        <div>
                            <h1>Welcome to Cottage Shoutouts</h1>
                        </div>
                        <div>
                            <p className={LandingPageStyles.landingText}>Let's build a cottage core community together! Every week we will select five of your submitted pictures and share them on our Instagram Channel</p>
                        </div>
                    </div>

                    {/* <div className={LandingPageStyles.svg}>
                    </div> */}

                </div>

                {/* <div className = {LandingPageStyles.upload}>
                <div className= {LandingPageStyles.add}>
                    
                </div>
                <h2>Upload your picture!</h2>
                <input></input>
                <button className={LandingPageStyles.button}>Submit</button>
            </div> */}


                {/* <div className={LandingPageStyles.weeklyHeading}>
                    <h1> - Weekly Theme - </h1>
                </div> */}

                {/* <div className={LandingPageStyles.wrapperCarousel} >

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
                </div> */}

                <Container className={LandingPageStyles.requirements}>


                    {/* <div className={LandingPageStyles.wrapperHeading}>
                    <div className={LandingPageStyles.requirementsImage}>
                    </div>
                </div> */}

                    <div className={[LandingPageStyles.requirementsHeading].join(' ')}>
                        <h2> - Photo Requirements - </h2>
                    </div>

                    <div className={[LandingPageStyles.requirementWrapper, "mb-5", "mt-5"].join(' ')}>
                
                    <Row xs={1} className={[LandingPageStyles.requirementBody].join(' ')} >
                        <Col  className="col-md-4 text-center" >
                            <div className={[LandingPageStyles.frameIcon, LandingPageStyles.icon, "mt-3", "mb-3" ].join(' ')} >
                            </div>
                            <p> 9:16 or 4:5 format</p>
                        </Col>

                        <Col className="col-md-4 text-center">
                        <div className={[LandingPageStyles.photoIcon, LandingPageStyles.icon, "mt-3", "mb-3"].join(' ')} >
                            </div>
                            <p> should be your own picture</p>
                        </Col>

                        <Col className="col-md-4 text-center" >
                        <div className={[LandingPageStyles.heartIcon, LandingPageStyles.icon, "mt-3", "mb-3"].join(' ')} >
                            </div>
                            <p> not edited and high resolution</p>
                        </Col>
                     
                    </Row>

                    </div>
                   

                </Container>

                <UploadButton uploadButton={LandingPageStyles.active} path='/upload' />

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