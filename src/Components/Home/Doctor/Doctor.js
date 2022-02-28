import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = ({ DoctorData }) => {
    const { name, special, img } = DoctorData;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <img src={img} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Specialize in: {special}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Doctor;