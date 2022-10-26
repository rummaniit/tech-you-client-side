import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const Register = () => {
    let { createUser, updatePersonProfile, setErrors, verifyEmail } = useContext(AuthContext)
    let handleRegister = (e) => {
        e.preventDefault()
        let form = e.target
        let name = form.name.value
        let email = form.email.value
        let password = form.password.value
        let photoURL = form.photoURL.value
        console.log(name, email, password, photoURL);
        createUser(email, password)
            .then(result => {
                const users = result.user
                // form.reset()
                setErrors('')
                handleEmailVerification()
                handleProfileUpdate(name, photoURL)
                console.log(users);
                form.reset()
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    let handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updatePersonProfile(profile)
            .then(result => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    let handleEmailVerification = () => {
        verifyEmail().then(result => {

        }).catch(error => console.log(error.message))
    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">Register now!</h1>
                            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="User Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <small>Already have an account?</small> <Link className="label-text-alt link link-hover" to='/login'>Sign In</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;