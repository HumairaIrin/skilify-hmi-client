import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { GrDocumentDownload } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, title, image, enrolled, details, classes, price } = course;
    return (
        <div className='course-details-page w-[75%] mx-auto my-6'>
            <h2 className='text-[#115e59] font-bold mt-6 text-4xl text-center details-page-header'>Read the course details properly.</h2>
            <p className='font-semibold text-center mb-4'>You can also download course details from here <button className='mt-3'><GrDocumentDownload /></button></p>
            <div className=" bg-base-100 shadow-xl">
                <figure><img className='mx-auto h-[40vh]' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-[#115e59] text-3xl font-bold">{title}</h2>
                    <p>{details}</p>
                    <br />
                    <h2 className='font-semibold'>Total Enrolled: {enrolled}</h2>
                    <h2 className='font-semibold'>Classes: {classes}</h2>
                    <div className='flex justify-between '>
                        <h2 className='font-semibold'>Price: $<span className='text-emerald-400 font-bold'>{price}</span></h2>
                        <button className="btn btn-outline bg-emerald-100"><Link to={`/courses/join-course/${id}`}>Join Course</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;