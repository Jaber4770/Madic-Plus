import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {SignInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirectURL = location.state?.from || '/login'

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
            .then(result => {
                history.push(redirectURL);
            })
    }
    
    return (
        <div className='position-relative'>
            <Container>
                <div className='log-d-flex mt-5 mb-3'>
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
                                <input className='sumbit-color' type="submit" value="Login" />
                            </form>
                            <span>Already have an account? <Link to="/signup">Signup</Link></span>
                        </div>
                        <div className='text-center other-login'>
                            <button className='me-3 google-bt-bg text-light fs-6 log-btn' onClick={handleGoogleLogin}><i class="fab fa-google"></i> Sign in with Google</button>
                            <button className=' text-light fs-6 facebook-bt-bg log-btn'><i class="fab fa-facebook"></i> Sign in with Facebook</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;