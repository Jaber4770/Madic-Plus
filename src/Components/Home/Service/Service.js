import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div>
            <Card style={{ width: '20rem', height: '100%' }}>
                <div className='icon-div'>
                    <h1 className={icon}> </h1>
                </div>
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Service Details</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;