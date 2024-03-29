import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-top">
            <Container>
                <div className='d-flex footer-center'  data-aos="zoom-in">
                    <div className="pe-4 pt-3">
                        <h3>Contact info</h3>
                        <p><FaPhoneAlt /> Phone: +88016XXXXXXXX</p>
                        <p><FaRegEnvelope /> Email: info@medicplus.com</p>
                    </div>
                    <div className="pe-4 pt-3">
                        <h3>For Appointment</h3>
                        <p><FaPhoneAlt /> Phone: +88016XXXXXXXX</p>
                        <p><FaRegEnvelope /> Email: medicplus@appointment.com</p>
                    </div>
                    <div className="pe-4 pt-3">
                        <h3>Social Media</h3>
                        <div className='text-danger social-icon'>
                            <a className="facebok" href="https://facebook.com"><FaFacebook /></a>
                            <a className="twitter" href="https://twitter.com"><FaTwitter /></a>
                            <a className="youtube" href="https://youtube.com"><FaYoutube /></a>
                            <a className="linkedin" href="https://linkedin.com"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="pe-4 pt-3">
                        <h3>Our Location</h3>
                        <p><FaMapMarkerAlt />location:Brahmanbaria Sadar</p>
                    </div>
                    <div className="pe-4 pt-3">
                        <h3>Our Services</h3>
                        <ul>
                            <li>Dental Department</li>
                            <li>Cardiology</li>
                            <li>Neurology</li>
                            <li>Bond Binding</li>
                            <li>X-Ray</li>
                            <li>Pregnency</li>
                        </ul>
                    </div>
                </div>
            </Container >
        </div>
    );
};

export default Footer;