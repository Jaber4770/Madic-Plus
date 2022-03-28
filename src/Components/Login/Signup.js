import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <div className='login-bg login-half-width pb-5 mt-5 mb-5 ms-5'>
                <div className='text-center pt-2'>
                    <h1>Sign up</h1>
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
                        <input className='sumbit-color' type="submit" value="submit" />
                    </form>
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                </div>
                <div className='text-center other-login'>
                    <button className='me-3 google-bt-bg text-light fs-6 log-btn'><i class="fab fa-google"></i> Sign in with Google</button>
                    <button className=' text-light fs-6 facebook-bt-bg log-btn'><i class="fab fa-facebook"></i> Sign in with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;