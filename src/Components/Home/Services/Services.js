import React, { useState, useEffect } from 'react';

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
                
            </div>
        </div>
    );
};

export default Services;