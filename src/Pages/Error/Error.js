import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    let error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1 className='text-8xl'>{error.statusText}</h1>
            <h1 className='text-5xl'>{error.status}</h1>
            <Link to='/'> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-10">Go to Home</button></Link>
        </div>
    );
};

export default Error;