import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
        <Link to='/'>
            <button className='back-btn'>Go Back</button>
        </Link>
            <img className='img-width' src='https://i.ibb.co/0yXXr8H/3819627.png' alt="" />
        </div>
    );
};

export default NotFound;