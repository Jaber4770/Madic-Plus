import React from 'react';
import { Button, Card } from 'react-bootstrap';


const EmerService = ({EmData}) => {
    const {name, description, call, icon} = EmData;

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <h1 className={icon}> </h1>
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