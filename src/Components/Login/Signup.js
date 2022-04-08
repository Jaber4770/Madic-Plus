import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Signup = () => {
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
        <div className='d-flex justify-content-center align-items-center'>
            <div className='login-bg login-half-width pb-5 mt-5 mb-5 ms-5'>
                <div className='text-center pt-2'>
                    <h1>Join us for <span className='join-color'>Free</span>!</h1>
                </div>
                <div className='form'>
                    <form action="">
                        <label htmlFor="">Name: </label> <br />
                        <input className='input-width' type="name" name="Name" id="" placeholder='Your Name' />
                        <br />
                        <br />
                        <label htmlFor="">Email: </label> <br />
                        <input className='input-width' type="email" name="Email" id="" placeholder='Your Eamil' />
                        <br />
                        <br />
                        <label htmlFor="">Password: </label> <br />
                        <input className='input-width' type="password" name="Password" id="" placeholder='Your Password' />
                        <br />
                        <br />
                        <input className='sumbit-color' type="submit" value="Signup" />
                    </form>
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                </div>
                <div className='text-center other-login'>
                    <button className='me-3 google-bt-bg text-light fs-6 log-btn' onClick={handleGoogleLogin}><i class="fab fa-google"></i> Sign in with Google</button>
                    <button className=' text-light fs-6 facebook-bt-bg log-btn'><i class="fab fa-facebook"></i> Sign in with Facebook</button>
                </div>
            </div>
            <div>
                <img className='w-75' src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=740&t=st=1648920839~exp=1648921439~hmac=133c421815970c9a6ee5b7ccfaa20ff8de8227c7bae3a0a80f673e2c4b3f6dd9" alt="" />
            </div>
        </div>
    );
};

export default Signup;