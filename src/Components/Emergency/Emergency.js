import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "./Emergency.css";
import EmerService from './EmerService/EmerService';

const Emergency = () => {
    const [EmergencyData, setEmergencydata] = useState([]);
    useEffect(() => {
        fetch('https://jaber4770.github.io/Medic-Plus-Services-Data/EmergencyData.json')
            .then(res => res.json())
            .then(data => setEmergencydata(data));
    }, [])

    return (
        <div>
            <div className='emergency-bg'>
                <div className='overlay'>
                    <h1 className='mt-4 mb-3 text-center emergency-heading'>24/7 We are <span className='span-color'>ready</span> for your call!</h1>
                </div>
            </div>
            <div className='emergency-card-bg'>
                <Container>
                    <div className='card-position emergency-card-bg'>
                        {
                            EmergencyData.map(EmData => <EmerService
                                key={EmData.id}
                                EmData={EmData}
                            ></EmerService>)
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Emergency;