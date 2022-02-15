import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { GiKidneys, GiBrain, GiBrokenBone } from "react-icons/gi";
import { BiBone } from "react-icons/bi";
import { MdPregnantWoman } from "react-icons/md";


const Service = () => {
    return (
        <div className='border'>
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