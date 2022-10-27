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
                users ? <h1 className='text-2xl m-10'>Welcome to <small className='text-3xl'>Teach You.com</small> <br /> <small className='text-5xl text-green-700 font-bold'>{users.displayName}</small></h1> : ''
            }
            <div className='md:grid grid-cols-2 gap-4 w-full mx-auto p-12'>
                {
                    courses.slice(0, 4).map(crs => <Homedisplay
                        key={crs.course_id}
                        crs={crs}
                    ></Homedisplay>)
                }
                <Link to='/courses'><button className="md:ml-80 btn btn-active btn-primary w-32 mx-auto" >See More</button></Link>
            </div>
        </div >
    );
};

export default Home;