import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavStyles from './Nav.module.css'
import Helmet from "react-helmet"

const Navigation = () => (
  <div>
     <section id={NavStyles.hero}>
        <div id={NavStyles["hero-top"]}>
            <nav className="navbar navbar-light navbar-expand-md">
                <div className="container-fluid"><a className="navbar-brand" href="/">CD</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-2"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse"
                        id="navcol-2">
                        <ul className="nav navbar-nav mx-auto">
                            <li className="nav-item" role="presentation"><a className="nav-link active" href="/blog">Blog</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Shoutouts</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Shop</a></li>
                            <li className="nav-item" role="presentation"></li>
                        </ul>
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#"><i id={NavStyles.instagramIcon} className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    </section>
  </div>
)

export default Navigation