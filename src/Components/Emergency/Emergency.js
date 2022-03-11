import React from 'react';
import { Container } from 'react-bootstrap';
import "./Emergency.css";

const Emergency = () => {
    return (
        <div>
            <div className='emergency-bg'>
                <div className='overlay'>
                    <h1 className='mt-4 mb-3 text-center emergency-heading'>24/7 We are <span className='span-color'>ready</span> for your call!</h1>
                </div>
            </div>
            <div className='emergency-card-bg'>
                <Container>
                    
                </Container>
            </div>
        </div>
    );
};

export default Emergency;