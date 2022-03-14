import React from 'react';
import { Card } from 'react-bootstrap';
import "./Doctors.css"

const Doctor = ({ DoctorData }) => {
    const { name, special, img } = DoctorData;
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="3000">
                <Card className='doctors-card-hover' style={{ width: '18rem' }}>
                    <img src={img} alt="" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Specialize in: {special}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Doctor;