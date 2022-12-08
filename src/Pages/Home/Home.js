import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import Homedisplay from './Homedisplay/Homedisplay';

const Home = () => {
    let { courses, users } = useContext(AuthContext)
    console.log(courses);
    return (
        <div>
            {
                users ? <h1 className='text-2xl m-10'>Welcome to <small className='text-3xl'>Teach You.com</small> <br /> <small className='text-5xl text-green-300 font-bold'>{users.displayName}</small></h1> : ''
            }
            <h1 className='text-5xl text-center mt-10 mb-10 font-mono'>Courses</h1>
            <hr />
            <div className='w-full mx-auto mt-10'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    {
                        courses.slice(0, 4).map(crs => <Homedisplay
                            key={crs.course_id}
                            crs={crs}
                        ></Homedisplay>)
                    }
                </div>
                <div className='mt-10'>
                    <Link to='/courses'><button className="btn btn-outline w-52" >See More</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Home;