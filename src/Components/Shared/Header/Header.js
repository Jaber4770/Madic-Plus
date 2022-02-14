import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className='bg-clr'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='navIcon' src="https://i.ibb.co/xjfw99d/free-downloads-medical-clipart-640290.png" alt="" />
                        Medic Plus
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Services</Nav.Link>
                        <Nav.Link href="#home">Appointment</Nav.Link>
                        <Nav.Link href="#home">Emergency</Nav.Link>
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">sijan</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;