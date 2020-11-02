import React from "react"
import PropTypes from "prop-types"
import Nav from "./Nav"
import Helmet from "react-helmet"

  
const Layout =  ({ children }) => {

  return (
    <>
     <Helmet async={false} >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css"/>
        </Helmet>
      <Nav />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout