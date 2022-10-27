import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const fullName = form.name.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                handleUpdateUserProfile(fullName, photoURL);
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error);
            });
    }


    const handleUpdateUserProfile = (fullName, photoURL) => {
        const profile = {
            displayName: fullName,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero mb-5">
            <div className="hero-content w-4/5 flex-col lg:flex-col">
                <div className="rounded-2xl flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex-col text-center">
                        <h1 className="text-4xl form-header text-[#115e59] font-bold mt-4">Register Account</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                {/* <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label> */}
                                <p><span className='text-red-400'>{error.message}</span></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn" style={{ backgroundColor: '#115e59' }}>Register</button>
                            </div>
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;