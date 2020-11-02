import React from "react"
import LandingPage from "./LandingPage"
// import LandingPage from "docs/pages/premium-themes/onepirate/index"
// import LandingPage from "docs/src/pages/premium-themes/onepirate/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/Caveat-Bold.ttf'
import Layout from "../components/Layout"
import Navigation from "../components/Nav"
import Helmet from "react-helmet"

import useScript from '../utils/useScript'
import Script from 'react-load-script'


/* useScript("https://code.jquery.com/jquery-3.2.1.slim.min.js")
.then(() =>{
  useScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js")
  })
.then(() => {
  useScript("https://use.fontawesome.com/fd3246bf26.js")
})
.then(()=> {
  useScript("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js")
})
.then(()=> {
  useScript("https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js")
})
.then(() => {
 
})
 */

class Home extends React.Component {

  state= {
    scriptLoaded: false,
    scriptError: false
  }
  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  componentDidMount(){
   
      }

  render(){
    return (
      <div>
        <LandingPage/>
       {/*  <Script
          url="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
      />
      <Script
          url="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
      />
      <Script
          url="https://use.fontawesome.com/fd3246bf26.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
      />
      <Script
          url="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
      />
      <Script
          url="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
      /> */}
      </div>
    )
  }

}


export default Home