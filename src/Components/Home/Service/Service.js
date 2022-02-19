import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { GiKidneys, GiBrain, GiBrokenBone } from "react-icons/gi";
import { BiBone } from "react-icons/bi";
import { MdPregnantWoman } from "react-icons/md";


const Service = ({service}) => {
    const {name, description, icon} = service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <h1>{icon}</h1>
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