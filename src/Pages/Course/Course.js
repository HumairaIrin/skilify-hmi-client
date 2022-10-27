import React from 'react';
import { Link } from 'react-router-dom';
import { GrDocumentDownload } from 'react-icons/gr';
import './Course.css';

const Course = ({ course }) => {
    const { id, title, details, ratings, image, price } = course;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='rounded-t-lg' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 70) + '...'}<Link to={`/courses/${id}`} style={{ color: 'blue' }}>Read More</Link> </p>
            </div>
            <div className="p-4 flex justify-between">
                <div>
                    <div className="rating flex align-center">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 mr-2" />
                        <p className="mt-[3px]">{ratings}</p>
                    </div>
                    <p className='mt-[3px] font-bold'>${price}</p>
                </div>
                <button> <p className='flex items-center justify-between'>PDF <span className='ml-1'><GrDocumentDownload /></span></p></button>
            </div>
        </div>
    );
};

export default Course;