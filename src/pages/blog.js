import React from 'react';

import Layout from "../components/Layout"
import Script from 'react-load-script'
import blogPageStyles from "./blogPage.module.css"
import Helmet from "react-helmet"
import useScript from '../utils/useScript'

if(typeof window !== "undefined"){
    window.addEventListener("DOMContentLoaded", handle , true);
}

function handle(){
    const script = document.createElement("script");

        script.src = "/js/mount.js";
        script.async = false;
    
        document.body.appendChild(script);
        console.log('script applied');
}

class Blog extends React.Component {

    state = {
        value: false,
        scriptLoaded: false,
        scriptError: false,
        loaded: 'hidden'
    }

   /*  
 */

    /* handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    
 */
  /*   handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }   
 */
      componentDidMount(){
        let that = this; 
        
        window.setTimeout(
            /* that.setState({scriptLoaded: true}) */
           function(){
            that.setState({loaded: 'visible'})
           } 
         , 400);

       
       /*    console.log('show2')
          useScript("/js/mount.js").then(() => {
            this.handleScriptLoad(); 
          }); */

         
          /* window.addEventListener("load", () => {
            this.handleScriptLoad(); 
          }); */
      } 

    render() {
        return (
        <Layout>
            <div className="text-center d-flex flex-column justify-content-center" id="titleWrapper">
                <h1 >The Cottage Dream Blog</h1>
                <p>lovely things written by the Cottage Core Community</p>
            </div>

            <div className="container">
                <h1 className="category-heading">Heading</h1>
            
                    <div style={{"visibility": this.state.loaded}} className= "glider-contain" >
                        <div className="glider">
                            <div className="image" >
                                <p  style={{"visibility": this.state.loaded}}>Ho</p>
                            </div>
                            <div className="image">
                                <p  style={{"visibility": this.state.loaded}}>Ho</p>
                            </div>
                            <div className="image">
                                <p  style={{"visibility": this.state.loaded}}>hey</p>
                            </div>
                            <div className="image">
                                <p  style={{"visibility": this.state.loaded}}>hey</p>
                            </div>
                            <div className="image">
                                <p  style={{"visibility": this.state.loaded}}>hey</p>
                            </div>
                        </div>
                        <button aria-label="Previous" className="glider-prev">«</button>
                        <button aria-label="Next" className="glider-next">»</button>
                        <div role="tablist" className="dots"></div>
                    </div>
                   
          
            </div>

            {/*  <Script
      url="/js/mount.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
        /> */}
        </Layout>


            /*   <div>
                  <Nav/>
                  <div>
                      <div className="jumbotron" data-bs-hover-animate="flash">
                          <h1>Heading text</h1>
                          <p className="bounce animated">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                          <p><a className="btn btn-primary" role="button">Learn more</a></p>
                      </div>
                  </div>
                  <div>
                      <div className="jumbotron" data-aos="fade">
                          <h1>Heading text</h1>
                          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                          <p><a className="btn btn-primary" role="button">Learn more</a></p>
                      </div>
                  </div>
              </div> */

        )
    }
}

export default Blog