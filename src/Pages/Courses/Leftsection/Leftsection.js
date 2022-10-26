import React from 'react';
import { Link } from 'react-router-dom';

const Leftsection = ({ course }) => {
    let { course_id, course_name } = course
    return (
        <div>
            <Link to={`/courses/${course_id}`} className=' font-extrabold' >{course_name}</Link>
        </div>
    );
};

export default Leftsection;