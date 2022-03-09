import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Appointment.css'

const Appointment = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='my-5'>
            <Container>
                <div className='appointment-heading'>
                    <h1 className='text-center mb-3'>Take your <span className='span-color span-underline'>Appointment</span></h1>
                </div>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <label htmlFor="Name">Name: </label>
                    <input className='input ' {...register("Name")} placeholder="Name" />
                    <label htmlFor="Phone">Phone: </label>
                    <input className='input ' {...register("Phone")} placeholder="Phone" /><br />
                    <label htmlFor="Email">Email: </label>
                    <input className='input ' {...register("Email")} placeholder="Email" /><br />
                    <label htmlFor="Address">Address: </label>
                    <input className='input ' {...register("Address")} placeholder="Address" /><br />
                    <label htmlFor="problem">Your Problem: </label>      
                    <textarea className='input ' {...register("Describe your problem")} placeholder="About you" />
                    <p>{data}</p>
                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default Appointment;