import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./EmerService.css"


const EmerService = ({ EmData }) => {
    const { name, description, call, icon } = EmData;

    return (
        <div>
            <Card className='em-card-hover' style={{ width: '18rem', height: '100%' }}>
                <div data-aos="zoom-in">
                    <div className='em-card-icon'>
                        <h1 className={icon}> </h1>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>< h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">{call}</Button>
            </Card>
        </div>
    );
};

export default EmerService;