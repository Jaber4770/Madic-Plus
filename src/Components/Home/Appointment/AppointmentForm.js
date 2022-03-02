import React from 'react';
import { useForm } from "react-hook-form";

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='appointment-name' defaultValue="Name" {...register("Name", { required: true })} />
                    <input className='appointment-phone' defaultValue="Phone" {...register("Phone", { required: true })} />
                    <input className='appointment-date' defaultValue="Appointment Date" {...register("Appointment-Date", { required: true })} />
                    <input className='appointment-time' defaultValue="Appointment Time" {...register("Appointment-Time", { required: true })} />
                    <input className='appointment-problem' defaultValue="Problem" {...register("Problem", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;