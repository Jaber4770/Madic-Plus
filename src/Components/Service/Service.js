import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description } = service
    return (
        <div>
            <div data-aos="zoom-in">
                <Card className='card-hover' style={{ width: '20rem', height: '100%' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><h2>{name}</h2></Card.Title>
                        <Card.Text>
                            <p className='pera-center'>{description}</p>
                        </Card.Text>
                    </Card.Body>
                    <div data-aos="zoom-out">
                        <div className='card-footer-btm'>
                            <Button className='btn-hover' variant="primary">Details</Button>
                        </div>
                    </div>
                </Card></div>
        </div>
    );
};

export default Service;