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
                        <div>
                            <img src="https://i.ibb.co/VY3WBb3/usericon.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;