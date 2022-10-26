import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';
import Leftsection from './Leftsection/Leftsection';
import Rightsection from './Rightsection/Rightsection';
import './Courses.css'

const Courses = () => {
    let { courses } = useContext(AuthContext)
    console.log(courses);
    return (
        <div>
            <h1 className="text-5xl mt-32 mb-16 font-semibold">All Courses</h1>
            <hr className='m-20' />
            <div className='courseSection'>
                <div>
                    {
                        courses.map(course => <Leftsection
                            key={course.course_id}
                            course={course}
                        ></Leftsection>)
                    }
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        courses.map(course2 => <Rightsection
                            key={course2.course_id}
                            course2={course2}
                        ></Rightsection>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;