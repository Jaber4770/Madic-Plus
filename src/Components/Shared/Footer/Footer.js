import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='border'>
            <Container>
                <div className='d-flex'>
                    <div className="pe-5 pt-3">
                        <h3><FaBeer />Contact info</h3>
                        <p>Phone: +88016XXXXXXXX</p>
                        <p>Email: info@medicplus.com</p>
                    </div>
                    <div className="pe-5 pt-3">
                        <h3>For Appointment</h3>
                        <p>Phone: +88016XXXXXXXX</p>
                        <p>Email: MedicPlus@services.com</p>
                    </div>
                    <div className="pe-5 pt-3">
                        <h3>Social</h3>
                        <div className='text-danger'>
                            <a href="https://facebook.com"></a>
                            <a href="https://twitter.com"></a>
                            <a href="https://youtube.com"></a>
                            <a href="https://linkedin.com"></a>
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