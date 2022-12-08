import React from 'react';
import { Link } from 'react-router-dom';

const Leftsection = ({ course }) => {
    let { course_id, course_name } = course
    return (
        <div className='font-mono text-xl mb-4 hover:bg-blue-500 rounded p-3'>
            <Link to={`/courses/${course_id}`} className='font-bold ' >{course_name}</Link>
        </div>
    );
};

export default Leftsection;