import React from 'react';
import { useForm } from "react-hook-form";

const AppointmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            {/*  "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="Name" {...register("Name", { required: true })} />

                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue="Phone" {...register("Phone", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AppointmentForm;