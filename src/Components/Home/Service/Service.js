import React from 'react';
import { Button, Card } from 'react-bootstrap';

const servicesData = [
    {
        name: "service1",
        id: "1",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "2",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "3",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "4",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "5",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "6",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "7",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "8",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "9",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
    {
        name: "service1",
        id: "10",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        image: ''
    },
]


const Service = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;