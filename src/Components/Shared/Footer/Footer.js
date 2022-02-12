import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='border'>
            <Container>
                <div className='d-flex'>
                    <div className="pe-5 pt-3">
                        <h3>Contact info</h3>
                        <p><FontAwesomeIcon icon="fa-solid fa-phone" /> Phone: +88016XXXXXXXX</p>
                        <p><FontAwesomeIcon icon="fa-regular fa-envelope" /> Email: info@medicplus.com</p>
                    </div>
                    <div className="pe-5 pt-3">
                        <h3>For Appointment</h3>
                        <p><FontAwesomeIcon icon="fa-solid fa-phone" /> Phone: +88016XXXXXXXX</p>
                        <p><FontAwesomeIcon icon="fa-regular fa-envelope" /> Email: MedicPlus@services.com</p>
                    </div>
                    <div className="pe-5 pt-3">
                        <h3><FontAwesomeIcon icon="fa-regular fa-globe" /> Social</h3>
                        <div className='text-danger'>
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
                    <div className="pe-5 pt-3">
                        <h3><FontAwesomeIcon icon="fa-solid fa-location-dot" /> Our Location</h3>
                        <p>location:Brahmanbaria Sadar</p>
                    </div>
                    <div className="pe-5 pt-3">
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