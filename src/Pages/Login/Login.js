import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
// import { Button, ButtonGroup } from 'react-daisyui';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
// import { FcGoogle } from "import { FaBeer } from 'react-icons/fa'";
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import toast from 'react-hot-toast';
import { useState } from 'react';

const Login = () => {
    let { SignInuser, setErrors, errors, setUsers, users, googleSignIn, gitSignIn, passwordResetMail } = useContext(AuthContext)
    let [usermail, setusermail] = useState('')

    let location = useLocation()
    let from = location.state?.from?.pathname || '/'
    let navigate = useNavigate()
    // console.log(users);
    let handleLogin = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password);
        SignInuser(email, password)
            .then(result => {
                let users = result.user
                setUsers(users)
                setErrors('')
                if (users.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    handlenotify()
                }
                console.log(users);
            }).catch(error => {
                // handleResetPass(email)
                setErrors(error.message)
            })
        // form.reset()
    }
    const Googleprovider = new GoogleAuthProvider();
    let handlegoogleSignIn = () => {
        googleSignIn(Googleprovider)
            .then(result => {
                let users = result.user
                // setUsers(users)
                // console.log(user);
                setErrors('')
                navigate(from, { replace: true })
                console.log(users);
            })
            .catch(error => {

                console.log(error.message);
                setErrors(error.message)
            })
    }
    const Gitprovider = new GithubAuthProvider();
    let handleGitSignIn = () => {
        gitSignIn(Gitprovider)
            .then(result => {
                let users = result.user
                setErrors('')
                navigate(from, { replace: true })
                console.log(users);
            })
    }
    let handleResetPass = () => {
        passwordResetMail(usermail)
            .then(() => {
                toast.success('reset Mail has been sent')
            })
            .catch((error) => {
                console.log(error.message);
                // ..
            });
    }
    let handlenotify = () => {
        toast.success('Verify your mail first')
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">Login now!</h1>
                            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" id='email' name='email' placeholder="email"
                                        onBlur={e => {
                                            setusermail(e.target.value)
                                        }} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <small>Not have a account?</small> <Link className="label-text-alt link link-hover" to='/register'>Register</Link>
                                    </label>
                                </div>
                                {
                                    errors ? <small className='text-red-900'>{errors}</small> : ''
                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-accent">Login</button>
                                </div>
                                <small>Foget Password? <Link onClick={handleResetPass} className='text-blue-500'>Reset Password</Link></small>
                                <hr className='mt-4' />
                                <div className='flex justify-evenly items-center px-10'>
                                    <div>
                                        <FcGoogle className='text-3xl' onClick={handlegoogleSignIn}></FcGoogle>
                                    </div>
                                    <div>
                                        <BsGithub className='text-3xl' onClick={handleGitSignIn}></BsGithub>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;