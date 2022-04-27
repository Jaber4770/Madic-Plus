import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

// service card, this is single card
const Service = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div>
            <div data-aos="fade-up">
                <Card className='card-hover' style={{ width: '20rem', height: '110%' }}>
                    <div className='icon-div'>
                        <div data-aos="fade-left">
                            <h1 className={icon}> </h1>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <Card.Body>
                            <Card.Title><h3>{name}</h3></Card.Title>
                            <Card.Text>
                                <p className='pera-center'>{description}</p>
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className='card-footer-btm'>
                        <div data-aos="fade-right">
                            <Button className='btn-hover' variant="primary">Service Details</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Service;