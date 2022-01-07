import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-img.png";
import './MenuBar.css';

const MenuBar = () => {
    return (
        // <div className="container-fluid bg-white logo-menu-container">
        //     <div className="container menu-container">
        //         <div className="">
        //             <img className="logo-img" src={logo} alt="" />
        //             <h4 className="logo-masterskill">MasterSkill</h4>
        //         </div>
        //         <div className="custom-navbar">
        //             <Link to="/home" className="items">
        //                 {" "}
        //                 <li>Home</li>
        //             </Link>
        //             <Link to="/services" className="items">
        //                 {" "}
        //                 <li>Services</li>
        //             </Link>
        //             <Link to="/about" className="items">
        //                 {" "}
        //                 <li>About Us</li>
        //             </Link>
        //             <Link to="/contact" className="items">
        //                 {" "}
        //                 <li>Contact Us</li>
        //             </Link>
        //         </div>
            
        // </div>
        // </div>


        // BOOTSTRAP NAVBAR
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo-img" src={logo} alt="" />
                        <h4 className="logo-masterskill">MasterSkill</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/home" className="items">Home</Link>
                            <Link to="/services" className="items">Services</Link>
                            <Link to="/about" className="items">About Us</Link>
                            <Link to="/contact" className="items">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;