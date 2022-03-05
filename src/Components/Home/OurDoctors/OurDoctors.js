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
        <div>
            <Container>
                <div className='mb-3 text-center'>
                    <h1>Meet Our Doctors</h1>
                    <p>Everyone is an expert in their field.</p>
                    <div className='doctor-card-position center'>
                        {
                            DoctorData.map(data => <Doctor
                                key={data.id}
                                DoctorData={data}
                            ></Doctor>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurDoctors;