import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div>
            <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Body>
                    <div>
                        <h1 className={icon}> </h1>
                    </div>
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Service Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;