import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Service = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={icon} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Service Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;