import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Appointment.css'

const img1 = 'https://i.ibb.co/VQLQ8jB/happy-young-male-doctor-using-tablet-computer-1262-18254.webp';
const img2 = 'https://i.ibb.co/MfPCQdD/doctor-is-going-examine-his-patient-using-his-stethoscope-sitting-people-1150-6561.webp';
const img3 = 'https://i.ibb.co/n0hmDQp/young-male-psysician-with-patient-measuring-blood-pressure-1303-17879.webp';
const img4 = 'https://i.ibb.co/rvSQ7L5/young-handsome-physician-medical-robe-with-stethoscope-1303-17818.webp';

const Appointment = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='img1-text font'>Always we are beside you!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className='img2-text font'>Always we <span className='text-white'>are</span> beside you!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className='img3-text'>
                            <h1 className='font'>Always we are <span className='text-white'>beside you!</span></h1>
                            <h3 className='font'>Emergency Doctors are 24 Ready for you!</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src={img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className='font'>Always we are beside you!</h1>
                        <h3 className='font'>Call us 24/7</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='py-5 app-form-bg'>
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
                            <textarea className='input problem-box' {...register("Problem")} placeholder="Write your problem" />
                            <br />
                            <div data-aos="fade-right">
                                <input className='submit-btn' type="submit" />
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Appointment;