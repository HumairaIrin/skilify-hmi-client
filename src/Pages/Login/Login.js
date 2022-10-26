import React from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero mb-5">
            <div className="hero-content w-4/5 flex-col lg:flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-[#115e59] font-bold mt-4">Login now</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
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
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn" style={{ backgroundColor: '#115e59' }}>Login</button>
                            </div>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Want to create account?</Link>
                            </label>
                        </div>
                    </form>
                    <div className='flex items-center justify-around w-[50%] mx-auto mb-3 border-2 rounded-full p-3'>
                        <div className=''><FcGoogle /></div>
                        <h2 className='font-bold'>Login with Google</h2>
                    </div>
                    <div className='flex items-center justify-around w-[50%] mx-auto mb-3 border-2 rounded-full p-3'>
                        <div className=''><BsGithub /></div>
                        <h2 className='font-bold'>Login with Github</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;