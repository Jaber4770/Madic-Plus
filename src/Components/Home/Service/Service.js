import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div>
            <div data-aos="fade-up">
                <Card className='card-hover' style={{ width: '20rem', height: '100%' }}>
                    <div className='icon-div'>
                        <h1 className={icon}> </h1>
                    </div>
                    <Card.Body>
                        <Card.Title><h3>{name}</h3></Card.Title>
                        <Card.Text>
                            <p className='pera-center'>{description}</p>
                        </Card.Text>
                    </Card.Body>
                    <div className='card-footer-btm'>
                        <Button className='btn-hover' variant="primary">Service Details</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Service;