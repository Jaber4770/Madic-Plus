import React from 'react';
import { Container } from 'react-bootstrap';
import "./Emergency.css";

const Emergency = () => {
    return (
        <div>
            <img className='amblance-banner-img' src="https://i.ibb.co/HdKn2Hp/ambulance-banner.webp" alt="" />
            <Container>
                <h1 className='my-3 text-center'>24/7 We are ready for your call!</h1>
                <div>
                    <img src="https://i.ibb.co/5Y20BkS/ambulance-concept-illustration-114360-7051.jpg" alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Emergency;