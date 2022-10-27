import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUserAlt } from 'react-icons/fa'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar w-4/5 mx-auto">
            <div className="navbar-start flex-1 my-3">
                <div className="dropdown">
                    <button className="btn btn-square lg:hidden" style={{ backgroundColor: '#115e59' }} tabIndex={0}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={(isActive) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
                        <li><NavLink to='/courses'>Courses</NavLink></li>
                        <li><NavLink to='/faq'>FAQ</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        {
                            user?.uid ?
                                <div className='flex items-center ml-3'>
                                    {
                                        user?.photoURL ?
                                            <img className='rounded-full user-image' src={user?.photoURL} alt="" />
                                            : <FaUserAlt />
                                    }
                                    <button onClick={handleLogOut} className="btn btn-outline ml-2 btn-login"><NavLink to='/login'>Log Out</NavLink></button>
                                </div>
                                :
                                <>
                                    <button className="btn btn-outline ml-2 btn-login"><NavLink to='/login'>Login</NavLink></button>
                                    <button className="btn btn-outline btn-dark ml-2 btn-register"><NavLink to='/register'>Register</NavLink></button>
                                </>
                        }
                    </ul>
                </div>
                <div className=''> <img src="/image/logo.png" className="image" alt="" /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    {
                        user?.uid ?
                            <div className='flex items-center ml-3'>
                                {
                                    user?.photoURL ?
                                        <img className='rounded-full user-image' src={user?.photoURL} alt="" />
                                        : <FaUserAlt />
                                }
                                <button onClick={handleLogOut} className="btn btn-outline ml-2 btn-login"><NavLink to='/login'>Log Out</NavLink></button>
                            </div>
                            :
                            <>
                                <button className="btn btn-outline ml-2 btn-login"><NavLink to='/login'>Login</NavLink></button>
                                <button className="btn btn-outline btn-dark ml-2 btn-register"><NavLink to='/register'>Register</NavLink></button>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;