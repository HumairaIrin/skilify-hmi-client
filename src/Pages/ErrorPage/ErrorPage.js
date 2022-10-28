import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <main className="h-screen mx-auto w-[80%] flex flex-col justify-center items-center bg-[#051236]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-[#ffac93] px-2 text-sm rounded mt-[-4%] mr-2 rotate-[20deg] text-white absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <div
                    className="relative inline-block text-sm font-medium text-[#ffac93] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ffac93] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-[#051236] border border-current">
                        <Link to="/">Go Home</Link>
                    </span>
                </div>
            </button>
        </main>
    );
};

export default ErrorPage;