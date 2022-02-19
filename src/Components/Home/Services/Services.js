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
        <div>
            <Container>
                <div className='margin-top-botm'>
                    <div>
                        <h2>We Specialize In</h2>
                        <p>Take our best services with free of cost!</p>
                    </div>
                    <div>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;