import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='border'>
            <Container>
                <div className='d-flex'>
                    <div className="pe-5 pt-3">
                        <h3>Contact info</h3>
                        <p><FaPhoneAlt /> Phone: +88016XXXXXXXX</p>
                        <p><FaRegEnvelope /> Email: info@medicplus.com</p>
                    </div>
                    <div className="pe-5 pt-3">
                        <h3>For Appointment</h3>
                        <p><FaPhoneAlt /> Phone: +88016XXXXXXXX</p>
                        <p><FaRegEnvelope /> Email: MedicPlus@services.com</p>
                    </div>
                    <div className="pe-5 pt-3">
                        <h3>Social</h3>
                        <div className='text-danger'>
                            <a target="_blank" href="https://facebook.com"><FaFacebook /></a>
                            <a target="_blank" href="https://twitter.com"><FaTwitter /></a>
                            <a target="_blank" href="https://youtube.com"><FaYoutube /></a>
                            <a target="_blank" href="https://linkedin.com"><FaLinkedin /></a>
                            <Link target={"_blank"} to="https://facebook.com"><FaFacebook /></Link>
                        </div>
                    </div>
                    <div className="pe-5 pt-3">
                        <h3>Our Location</h3>
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