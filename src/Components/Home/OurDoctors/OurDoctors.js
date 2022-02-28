import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import "./OurDoctors.css"


const OurDoctors = () => {
    const [DoctorData, setDoctorData] = useState([]);

    useEffect(() => {
        fetch('https://jaber4770.github.io/Medic-Plus-Services-Data/DoctorsData.json')
            .then(res => res.json())
            .then(data => setDoctorData(data))
    }, [])


    return (
        <div className='mb-3'>
            <Container>
                <h1>Meet Our Doctors</h1>
                <p>Everyone is an expert in their field.</p>
                <div className='doctor-card-position'>
                    {
                        DoctorData.map(data => <Doctor
                            key={data.id}
                            DoctorData={data}
                        ></Doctor>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default OurDoctors;