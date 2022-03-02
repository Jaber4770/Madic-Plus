import React from 'react';
import { useForm } from "react-hook-form";
import "./AppointmentForm.css"

const AppointmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className='text-center mt-5 mb-4'>Appointment</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <img src="http://asianitbd.com/wp/hopemedical/wp-content/uploads/2016/10/image-forlift.png" alt="" />
                </div>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='appointment appointment-name' defaultValue="Name" {...register("Name", { required: true })} />
                    <input className='appointment appointment-phone' defaultValue="Phone" {...register("Phone", { required: true })} />
                    <input className='appointment appointment-date' 
                    type="date" {...register("Appointment-Date", { required: true })} />
                    <input className='appointment appointment-time' defaultValue="Appointment Time" {...register("Appointment-Time", { required: true })} />
                    <input className='appointment appointment-problem' defaultValue="Problem" {...register("Problem", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className='appointment' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;