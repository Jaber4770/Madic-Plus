import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description } = service
    return (
        <div>
            <Card className='card-hover' style={{ width: '20rem', height: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <p className='pera-center'>{description}</p>
                    </Card.Text>
                    <div className='btn-bottom'>
                        <Button className='btn-hover' variant="primary">Details</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;