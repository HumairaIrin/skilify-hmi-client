import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-section'>
            <div className='flex flex-col w-4/5 mx-auto'>
                <h1 className='text-4xl font-bold home-header'>Skilify HMI provides you courses relevent to web development</h1>
                <p className="home-text">If you wonderning why to gain skill on web development you must have noticed that every popular business has its own websites that help the customer to locate the services you provide. Not only for business, but websites are also built for portfolios, blogs, funding, charities, events, and more.</p>
            </div>
        </div>
    );
};

export default Home;