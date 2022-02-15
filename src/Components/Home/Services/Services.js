import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://jaber4770.github.io/Medic-Plus-Services-Data/ServicesData.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div>
                <h2>We Specialize In</h2>
                <p>Take our best services with free of cost!</p>
            </div>
            <div>
                {
                    service.map( service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;