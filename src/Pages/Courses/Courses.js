import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='mx-auto courses-page'>
            <div className='courses-list'>
                <h2>courses list</h2>
            </div>
            <div className='courses-card'>
                <h3>courses card</h3>
            </div>
        </div>
    );
};

export default Courses;