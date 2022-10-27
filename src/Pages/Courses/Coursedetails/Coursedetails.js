import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Coursedetails = () => {
    let Allcourses = useLoaderData()
    let imageStyle = {
        width: '500px'
    }
    console.log(Allcourses);
    let { course_id, author, course_name, course_img, course_price, course_ratings, course_duration, about_course } = Allcourses
    return (
        <div className=''>
            <h1 className='text-5xl mt-44 mb-20'>{course_name}</h1>
            <button className="btn btn-primary">Get pdf of {course_name} course</button>

            <div className="card md:card-side bg-base-100 shadow-xl p-4 ">
                <figure><img src={course_img} style={imageStyle} alt="Album" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-center text-4xl font-semibold">{course_name}</h2>
                    <p>{about_course}</p>
                    <div className='flex justify-around items-center'>
                        <small className='text-xl font-bold  m-6'>Price: {course_price}</small>
                        <small className='text-xl font-bold  m-6'>Ratings: {course_ratings}</small>
                        <small className='text-xl font-bold  m-6'>Duration: {course_duration}</small>
                    </div>
                    <div>
                        <h1 className="text-3xl">Autho Information</h1>
                        <div className='md: flex justify-between mt-10 text-xl'>
                            <small>
                                Author Name: {author.author_name}
                            </small>
                            <small>
                                Author Experience: {author.author_experience}
                            </small>
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/checkout/${course_id}`}>
                            <button className="btn btn-primary mt-5">Get Premium Access</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coursedetails;