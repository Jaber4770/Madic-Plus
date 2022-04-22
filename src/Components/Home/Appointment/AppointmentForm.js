import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "./AppointmentForm.css"

const AppointmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        // className='form-bg'
        <div className='my-4'>
            <Container>
                <div className='appointment-head'>
                    <h1 className='text-center appointment-title mt-5 mb-4 span-color'>Appointment</h1>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5 pt-3'>
                    <div data-aos="fade-right">
                        <div>
                            <img className='w-100' src="https://i.ibb.co/TH3y1CH/6460.jpg" alt="" />
                        </div>
                    </div>
                    <div>
                        <div data-aos="fade-left">
                            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="Name">Name: </label>
                                <input placeholder='Name' className='appointment appointment-name' {...register("Name", { required: true })} />
                                <label htmlFor="Name">Phone: </label>
                                <input placeholder='Phone' className='appointment appointment-phone' {...register("Phone", { required: true })} />
                                <label htmlFor="date">Date:</label>
                                <br />
                                <input className='appointment appointment-date'
                                    type="date" {...register("Appointment-Date", { required: true })} />
                                <label htmlFor="Time">Time: </label>
                                <input placeholder='Time' className='appointment appointment-time' {...register("Appointment-Time", { required: true })} />
                                <label htmlFor="problem">Your problem: </label>
                                <textarea placeholder='Your problem' className='appointment appointment-problem' {...register("Problem", { required: true })}></textarea>
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                <input className='submit submit-btn' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AppointmentForm;