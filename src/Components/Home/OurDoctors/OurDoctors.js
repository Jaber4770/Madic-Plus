import React, { useEffect, useState } from 'react';
import "./OurDoctors.css"


const OurDoctors = () => {
    const [Doctor, setDoctor] = useState([]);

    useEffect( ()=> {
        fetch('https://jaber4770.github.io/Medic-Plus-Services-Data/DoctorsData.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    },[])

    
    return (
        <div>
            <h1>Meet Our Doctors</h1>
            <p>Everyone is an expert in their field.</p>
            <div>

            </div>
        </div>
    );
};

export default OurDoctors;