import React from 'react';
import { Link } from 'react-router-dom';

const Homedisplay = ({ crs }) => {
    let { course_id, course_name, course_img, course_price, course_ratings, course_duration, about_course } = crs
    let imgStyle = {
        width: '500px'
    }
    return (
        <div>
            <div className="card w-96 mx-auto h-full glass mb-6 font-mono">
                <figure><img src={course_img} style={imgStyle} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-extrabold text-blue-200">{course_name}</h2>
                    <p className='font-mono'>{(about_course).slice(0, 80) + '....'}</p>

                    <div className='flex justify-around'>
                        <h4 className="font-mono text-xl">Ratings {course_ratings}</h4>

                        <h4 className="font-mono text-xl">Price {course_price}</h4>
                    </div>

                    <div className="card-actions justify-center mt-5">
                        <Link to={`/courses/${course_id}`}>
                            <button className="btn btn-outline">Details of {course_name}</button>
                        </Link>
                    </div>
                    <div>
                        <h4 className="font-mono text-xl">Durations {course_duration}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homedisplay;