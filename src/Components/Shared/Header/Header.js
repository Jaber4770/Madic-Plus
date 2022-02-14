import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" variant="light" className='bg-clr'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='navIcon' src="https://i.ibb.co/xjfw99d/free-downloads-medical-clipart-640290.png" alt="" />
                        Medic Plus
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='nav-item' href="#home">Home</Nav.Link>
                        <Nav.Link className='nav-item' href="#home">Services</Nav.Link>
                        <Nav.Link className='nav-item' href="#home">Appointment</Nav.Link>
                        <Nav.Link className='nav-item' href="#home">Emergency</Nav.Link>
                        <Nav.Link className='nav-item' href="#home">About</Nav.Link>
                        <Nav.Link className='nav-item' href="#home">Login</Nav.Link>
                        <Navbar.Text>
                            <p>Signed in as: sijan</p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;