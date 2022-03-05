import React from 'react';
import Appointment from '../Appointment/AppointmentForm';
import Banner from '../Banner/Banner';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurDoctors></OurDoctors>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;