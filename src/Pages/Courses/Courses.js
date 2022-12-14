import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='mx-auto courses-page'>
            <div className='courses-list'>
                <h2 className="list-header font-bold text-fuchsia-900">All Courses</h2>
                {
                    courses.map(c => <div
                        key={c.id}
                        course={c}
                        className="l-item w-4/5 mx-auto">
                        <Link to={`/courses/${c.id}`}>{c.title}</Link>
                    </div>)
                }
            </div>
            <div className='courses-card'>
                <h3 className="choose-course-header font-bold text-fuchsia-900">Choose courses you want to join.</h3>
                <div className='all-cards'>
                    {
                        courses.map(c => <Course
                            key={c.id}
                            course={c}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;