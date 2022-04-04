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
        <div>
            <div>
                <img className='service-banner' src="https://i.ibb.co/hgPjLRn/2006-w020-n001-411-B-p15-411.jpg" alt="" />
            </div>
            <div className='center'>
                <div className='service-center'>
                    <div className='service-overlay'>
                        <img src="" alt="" />
                    </div>
                    <Container>
                        <div className='heading-underline'>
                            <h1 className='my-4 underline'>Our best <span className='span-color'>services</span> for you.</h1>
                        </div>
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
            </div>
        </div>
    );
};

export default Services;