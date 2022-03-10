import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://jaber4770.github.io/Medic-Plus-Services-Data/ServicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service-bg mt-5 mb-3'>
            <Container>
                <div className='center'>
                    <div className='margin-top-botm text-center'>
                        <div className='service-head'>
                            <h2>We <span className='span-color'>Specialize</span> In</h2>
                            <p className='p-underline'>Take our best services with free of cost!</p>
                        </div>
                        <div className='card-position'>
                            {
                                services.map(service => <Service
                                    key={service.id}
                                    service={service}
                                ></Service>)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;