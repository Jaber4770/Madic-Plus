import React, { useState, useEffect } from 'react';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('')
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