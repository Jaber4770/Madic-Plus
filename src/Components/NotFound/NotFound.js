import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <img className='img-width' src='https://i.ibb.co/YyG71Th/3819627.jpg' alt="" />
            <br />
            <Link to='/'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;