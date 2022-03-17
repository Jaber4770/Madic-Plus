
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div>
            <Container>
                <h1 className='text-center my-4'>Please Login!</h1>
                <div className='log-d-flex'>
                    <div className='login-half-width login-img'>
                        <img className='log-img-w' src="https://i.ibb.co/HpkKyHd/4957136.jpg" alt="" />
                    </div>
                    <div className='login-bg login-half-width'>
                        <div className='text-center'>
                            <img className='w-25' src="https://i.ibb.co/VY3WBb3/usericon.jpg" alt="" />
                        </div>
                        <div className='form'>
                            <form action="">
                                <label htmlFor="">Email: </label> <br />
                                <input className='input-width' type="email" name="Email" id="" placeholder='Your Eamil' />
                                <br />
                                <br />
                                <label htmlFor="">Password: </label> <br />
                                <input className='input-width' type="password" name="Password" id="" placeholder='Your Password' />
                                <br />
                                <br />
                                <input className='sumbit-color' type="submit" value="submit" />
                            </form>
                        </div>
                        <div className='text-center other-login'>
                            <button className='me-3 google-bt-bg text-light fs-5 log-btn'><i className="fa-brands fa-google"></i> Sign in with Google</button>

                            <button className=' text-light fs-5 facebook-bt-bg log-btn'><FontAwesomeIcon icon="fa-brands fa-facebook" /> Sign in with Facebook</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;