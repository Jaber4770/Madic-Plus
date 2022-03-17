
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
                                <input type="email" name="Email" id="" />
                                <br />
                                <label htmlFor="">Password: </label> <br />
                                <input type="password" name="Password" id="" />
                                <br />
                                <input type="submit" value="submit" />
                            </form>
                        </div>
                        <div className='text-center'>
                            <button><i className="fa-brands fa-google"></i> Sign in with Google</button>

                            <button><FontAwesomeIcon icon="fa-brands fa-facebook" /> Sign in with Facebook</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;