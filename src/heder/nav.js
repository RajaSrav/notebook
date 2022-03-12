import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import "./header.css"

export default class Navigation extends Component {
    render() {
       
        return (
            <div className="mainnav navbar1">
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                     <Navbar.Brand><Link to='/'> <img width="30" height='30' className="rounded-circle" alt="logo" /></Link></Navbar.Brand> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto sticky-top">
                            <Nav.Link > <Link className="Link" to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link className="Link" to='/html'>HTML</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/css'>CSS</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/bootstrap'>BootStrap</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/javascript'>JavaScript</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/es6'>ES6</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/reactjs'>React JS</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/github'>Git & GitHub</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/python'>Python</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/googletools'>Google Tools</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/mittools'>MIT Tool</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/raptor'>Raptor</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/aws'>AWS</Link></Nav.Link>
                            

                            
                        </Nav>
                        {/* <Navbar.Collapse className="justify-content-end"> 
                        <Nav.Link><Link className="Link"  to='/login' onClick = {() => localStorage.removeItem("token")}>Logout</Link></Nav.Link>
                        <Nav.Link><Link className="Link" to='/Profile' >Profile</Link></Nav.Link>
                        </Navbar.Collapse> */}
                        </Navbar.Collapse>
                </Navbar>             
            </div>
        )
    }
}
