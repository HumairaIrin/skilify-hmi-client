import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const Login = () => {
    const { login, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error);
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleSignInWithGithub = () => {
        signInWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero mb-5">
            <div className="hero-content w-4/5 flex-col lg:flex-col">
                <div className="rounded-2xl flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="flex-col text-center">
                        <h1 className="form-header text-5xl text-[#115e59] font-bold mt-4">Login now</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p><span className='text-red-400'>{error.message}</span></p>
                            <div className="form-control mt-6">
                                <button className="btn" style={{ backgroundColor: '#115e59' }}>Login</button>
                            </div>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Want to create account?</Link>
                            </label>
                        </div>
                    </form>
                    <div onClick={handleSignInWithGoogle} style={{ cursor: 'pointer' }} className='login-methods flex items-center justify-around w-[50%] mx-auto mb-3 border-2 rounded-full p-3'>
                        <div className=''><FcGoogle /></div>
                        <h2 className='font-bold'>Login with Google</h2>
                    </div>
                    <div onClick={handleSignInWithGithub} style={{ cursor: 'pointer' }} className='login-methods flex items-center justify-around w-[50%] mx-auto mb-3 border-2 rounded-full p-3'>
                        <div className=''><BsGithub /></div>
                        <h2 className='font-bold'>Login with Github</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;