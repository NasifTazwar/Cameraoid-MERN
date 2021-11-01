import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/1.png';
import './Header.css';

const Header = () => {
    const {user , logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container className="">
                    <Navbar.Brand href="/">
                        <img className="logo-img" src={logo} alt="" />
                        <div className="logo-title fw-bold">Paradise Tourism</div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="m-auto">
                            <Nav.Link as={HashLink} to ="/home#home" className="text-light nav-link">Home</Nav.Link>
                            <Nav.Link as={HashLink} to ="/home#services" className="text-light nav-link">Services</Nav.Link>
                            <Nav.Link as={HashLink} to ="/myOrders" className="text-light nav-link">My Orders</Nav.Link>
                            <Nav.Link as={HashLink} to ="/manageallorders" className="text-light nav-link">Manage All Orders</Nav.Link>
                            <Nav.Link as={HashLink} to ="/addNewPackage" className="text-light nav-link">Add a Package</Nav.Link>
                            
                            
                        </Nav>

                        <Nav>
                            {
                                user?.email ?
                                <Navbar.Text className="mx-2">
                                Signed in as:  
                                <img className="gmail-user-photo" src={user?.photoURL} alt="" />
                                <a href="#login">
                                    {user?.displayName || user?.email}
                                </a>
                                </Navbar.Text> :
                                <p></p>
                            }
                            { user?.email ?
                                <Button onClick={logOut} variant="light" className="p-2">Logout</Button> :
                                <Nav.Link as={Link} to ="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;