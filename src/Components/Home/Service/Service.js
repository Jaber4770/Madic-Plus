import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { FaTooth } from "react-icons/fa";
import { FaAccessibleIcon, MaterialDesign } from "react-icons/fa";



const Service = ({ service }) => {
    const { name, description, icon } = service;
    const mdIcon = MaterialDesign[icon];
    return (
        <div>
            <StyledTabs icon={icon}> </StyledTabs>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={icon} />
                <FaAccessibleIcon />
                <Card.Body>
                    <Card.Title>{icon}</Card.Title>
                    {icon}
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Service Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;