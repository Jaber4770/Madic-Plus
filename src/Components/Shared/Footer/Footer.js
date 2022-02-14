import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-top">
            <Container>
                <div className='d-flex'>
                    <div className="pe-3 pt-3">
                        <h3>Contact info</h3>
                        <p><FaPhoneAlt /> Phone: +88016XXXXXXXX</p>
                        <p><FaRegEnvelope /> Email: info@medicplus.com</p>
                    </div>
                    <div className="pe-3 pt-3">
                        <h3>For Appointment</h3>
                        <p><FaPhoneAlt /> Phone: +88016XXXXXXXX</p>
                        <p><FaRegEnvelope /> Email: MedicPlus@appointment.com</p>
                    </div>
                    <div className="pe-3 pt-3">
                        <h3>Social</h3>
                        <div className='text-danger social-icon'>
                            <a target="_blank" href="https://facebook.com"><FaFacebook /></a>
                            <a target="_blank" href="https://twitter.com"><FaTwitter /></a>
                            <a target="_blank" href="https://youtube.com"><FaYoutube /></a>
                            <a target="_blank" href="https://linkedin.com"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="pe-3 pt-3">
                        <h3>Our Location</h3>
                        <p><FaMapMarkerAlt />location:Brahmanbaria Sadar</p>
                    </div>
                    <div className="pe-3 pt-3">
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