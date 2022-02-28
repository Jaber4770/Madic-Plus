import React from 'react';
import { useForm } from "react-hook-form";

const AppointmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="Name" {...register("Name", { required: true })} />
                <input defaultValue="Phone" {...register("Phone", { required: true })} />
                <input defaultValue="Appointment Date" {...register("Appointment-Date", { required: true })} />
                <input defaultValue="Appointment Time" {...register("Appointment-Time", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AppointmentForm;