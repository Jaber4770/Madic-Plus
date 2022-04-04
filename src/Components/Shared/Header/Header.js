import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, Logout } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg='light' variant="light" className='bg-clr'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='navIcon' src="https://i.ibb.co/xjfw99d/free-downloads-medical-clipart-640290.png" alt="" />
                        <h3 className='navBrand'>Medic Plus</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className='nav-item' to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className='nav-item' to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className='nav-item' to="/appointment">Appointment</Nav.Link>
                        <Nav.Link as={HashLink} className='nav-item' to="/emergency">Emergency</Nav.Link>
                        <Nav.Link as={HashLink} className='nav-item' to="/about">About us</Nav.Link>
                        {
                            user.email ?
                                <div className='d-flex'>
                                    <span>{user.displayName}</span>
                                    <button onClick={Logout}>Logout</button>
                                </div>
                                :
                                <Nav.Link as={HashLink} className='nav-item' to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;