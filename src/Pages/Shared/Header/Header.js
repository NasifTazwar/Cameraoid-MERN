import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user , logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <div className="logo-title fw-bold">Cameraoid</div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to ="/home#home" className="text-light nav-link">Home</Nav.Link>
                            <Nav.Link as={HashLink} to ="/home#products" className="text-light nav-link">Popular Cameras</Nav.Link>

                            <Nav.Link as={HashLink} to ="/exploreallproducts" className="text-light nav-link">Explore All Cameras</Nav.Link>
                            
                            {
                                user?.email &&
                                    <>
                                    <Nav.Link as={HashLink} to ="/dashboard" className="text-light nav-link">Dashboard</Nav.Link>
                                    <Navbar.Text className="mx-2">
                                    Signed in as:  
                                    <img className="gmail-user-photo" src={user?.photoURL} alt="" />
                                    <a href="#login">
                                        {user?.displayName || user?.email}
                                    </a>
                                    </Navbar.Text>
                                    </>
                                   
                                
                                
                            }
                            { user?.email ?
                                <Button onClick={logOut} variant="light" className="p-2">Logout</Button> :
                                <Nav.Link as={Link} to ="/login">Login</Nav.Link>
                            }
                            
                            {/* {
                                user?.email &&
                                <>
                                    <Nav.Link as={HashLink} to="/myOrders" className="text-light nav-link">My Orders</Nav.Link>
                                    <Nav.Link as={HashLink} to="/manageallorders" className="text-light nav-link">Manage All Orders</Nav.Link>
                                    <Nav.Link as={HashLink} to="/addNewPackage" className="text-light nav-link">Add a Package</Nav.Link>

                                </>
                            }
                            {
                                user?.email &&
                                <Navbar.Text className="mx-2">
                                Signed in as:  
                                <img className="gmail-user-photo" src={user?.photoURL} alt="" />
                                <a href="#login">
                                    {user?.displayName || user?.email}
                                </a>
                                </Navbar.Text>
                            }
                            { user?.email ?
                                <Button onClick={logOut} variant="light" className="p-2">Logout</Button> :
                                <Nav.Link as={Link} to ="/login">Login</Nav.Link>
                            } */}
                        </Nav>

                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                    
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;