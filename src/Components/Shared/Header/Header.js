import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
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
                        <HashLink className='nav-item' to="#home">Home</HashLink>
                        <HashLink className='nav-item' to="#services">Services</HashLink>
                        <HashLink className='nav-item' to="#appointment">Appointment</HashLink>
                        <HashLink className='nav-item' to="#emergency">Emergency</HashLink>
                        <HashLink className='nav-item' to="#about">About</HashLink>
                        <HashLink className='nav-item' to="#login">Login</HashLink>
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