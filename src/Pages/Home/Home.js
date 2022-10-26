import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import Homedisplay from './Homedisplay/Homedisplay';

const Home = () => {
    let { courses } = useContext(AuthContext)
    console.log(courses);
    return (
        <div>
            <div className='md:grid grid-cols-2 gap-y-4 px-16 w-full mx-auto'>
                {
                    courses.slice(0, 4).map(crs => <Homedisplay
                        key={crs.course_id}
                        crs={crs}
                    ></Homedisplay>)
                }
                <Link to='/courses'><button className=" btn btn-active btn-primary w-32 mx-auto" >See More</button></Link>
            </div>
        </div >
    );
};

export default Home;