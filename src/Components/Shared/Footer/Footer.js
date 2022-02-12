import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-primary text-white'>
            <Container>
                <div className='d-flex'>
                    <div>
                        <h3>Contact info</h3>
                        <p>Phone: +88016XXXXXXXX</p>
                        <p>Email: MedicPlus@gmail.com</p>
                    </div>
                    <div>
                        <h3>Social</h3>
                        <div>
                            <a href="https://facebook.com">
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            </a>
                            <a href="https://twitter.com">
                                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                            </a>
                            <a href="https://youtube.com">
                                <FontAwesomeIcon icon="fa-brands fa-youtube" />
                            </a>
                            <a href="https://linkedin.com">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3>Our Location</h3>
                        <p>location:Brahmanbaria Sadar</p>
                    </div>
                    <div>
                        <h3>Our Services</h3>
                        <ul>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                            <li>d</li>
                            <li>e</li>
                        </ul>
                    </div>
                </div>
            </Container >
        </div>
    );
};

export default Footer;