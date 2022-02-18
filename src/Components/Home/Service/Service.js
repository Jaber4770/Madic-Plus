import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { GiKidneys, GiBrain, GiBrokenBone } from "react-icons/gi";
import { BiBone } from "react-icons/bi";
import { MdPregnantWoman } from "react-icons/md";


const Service = ({service}) => {
    const [name, description, image] = service;
    return (
        <div className='border'>
            <h1>hello world</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <h1>{image}</h1>
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