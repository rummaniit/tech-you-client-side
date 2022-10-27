// import { error } from 'daisyui/src/colors';
import React from 'react';
// import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/Authprovider';
// import logo from '../../../logo.svg'
// import image from '../../../images/logoedu.jpg'

const Header = () => {
    // let [hover, setHover] = useState(false)
    const { users, logOut, toggleTheme } = useContext(AuthContext)
    console.log(users);
    let location = useLocation()
    let from = location.state?.from?.pathname || '/'
    let navigate = useNavigate()

    let handleLogout = () => {
        logOut().then(() => {
            navigate(from, { replace: true })
        }).catch(error => {

        })
    }

    return (
        <div className='p-8'>
            <nav className='flex justify-around items-center'>
                <div className='flex justify-start items-center'>
                    {/* <img src={logo} alt="" /> */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-24 h-24 text-white p-2 bg-gray-900 rounded-full'
                        viewBox='0 0 24 24'
                    >
                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                    </svg>
                    <Link to='/'><h2 className="text-4xl">Teach You.com</h2></Link>
                </div>
                <div>
                    {
                        users ? <img src={users.photoURL} title={users.displayName} style={{
                            width: '80px',
                            borderRadius: '50%',
                        }} alt="" /> : ''
                    }
                </div>
                <div className='mr-2'>
                    <Link className='text-xl p-3' to='/'>Home</Link>
                    <Link className='text-xl p-3' to='/courses'>Courses</Link>
                    <Link className='text-xl p-3' to='/faq'>Faq</Link>
                    <Link className='text-xl p-3' to='/blog'>Blog</Link>
                    {
                        users ?
                            <>
                                {/* <img src={users.photoURL} style={imgStyle} alt="" /> */}
                                <Link className='text-xl p-3' onClick={handleLogout}>Log Out</Link>
                            </> :
                            <>
                                <Link className='text-xl p-3' to='/login'>Login</Link>
                                <Link className='text-xl p-3' to='/register'>Register</Link>
                            </>
                    }

                    <label className="swap swap-rotate">
                        <input type="checkbox" onClick={toggleTheme} />
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>

                </div>
            </nav>
        </div>
    );
};

export default Header;