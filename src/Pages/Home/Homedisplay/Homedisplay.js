import React from 'react';
import { Link } from 'react-router-dom';

const Homedisplay = ({ crs }) => {
    let { course_id, course_name, course_img, course_price, course_ratings, course_duration, about_course } = crs
    let imgStyle = {
        width: '500px'
    }
    return (
        <div>
            <div className="card w-80 h-full glass">
                <figure><img src={course_img} style={imgStyle} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course_name}</h2>
                    <p>{(about_course).slice(0, 50) + '....'}</p>

                    <div className='flex justify-around'>
                        <h4 className="badge-primary h-12 m-3">Ratings: {course_ratings}</h4>
                        <h4 className="badge-primary h-12 m-3">Durations: {course_duration}</h4>
                        <h4 className="badge-primary h-12 m-3">Price: {course_price}</h4>
                    </div>

                    <div className="card-actions justify-center mt-5">
                        <Link to={`/courses/${course_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homedisplay;