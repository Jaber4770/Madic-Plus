import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Appointment.css'

const Appointment = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='py-5 form-bg'>
            <Container>
                <div className='appointment-heading'>
                    <h1 className='text-center mb-3'>Take your <span className='span-color span-underline'>Appointment</span></h1>
                </div>
                <div className='form-center'>
                    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <label htmlFor="Name">Name: </label><br />
                        <input className='input ' {...register("Name")} placeholder="Name" />
                        <br />
                        <br />
                        <label htmlFor="Phone">Phone: </label><br />
                        <input className='input ' {...register("Phone")} placeholder="Phone" />
                        <br />
                        <br />
                        <label htmlFor="Email">Email: </label><br />
                        <input className='input ' {...register("Email")} placeholder="Email" />
                        <br />
                        <br />
                        <label htmlFor="Address">Address: </label><br />
                        <input className='input ' {...register("Address")} placeholder="Address" />
                        <br />
                        <br />
                        <label htmlFor="problem">Your Problem: </label><br />
                        <textarea className='input problem-box' {...register("Problem")} placeholder="About you" />
                        <p>{data}</p>
                        <input type="submit" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Appointment;