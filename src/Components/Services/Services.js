import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://jaber4770.github.io/Medic-Plus-Services-Data/Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div className='service-center'>
            <Container>
                <h1 className='my-4'>Our best services for you.</h1>
                <div className='card-position'>
                    {
                        Services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;