import React from 'react';
import './FAQ.css'
const FAQ = () => {
    return (
        <div className='faq-section w-[50%] mx-auto bg-rose-100 p-5 rounded-lg mb-5 md:flex-col'>
            <h3 className='text-3xl font-bold mb-2' style={{ color: 'rgb(46 87 84)' }}>Some frequently asked questions about our courses!</h3>
            <div className='questions'>
                <h2 className='question'>Will i get the access for lifetime?</h2>
                <p className='mt-5'>Yes.You will get lifetime access.</p>
            </div>
            <div className='questions'>
                <h2 className='question'>Can I see the bonus videos without finishing the main course videos?</h2>
                <p className='mt-5'>No,we will not give you that access.</p>
            </div>
            <div className='questions'>
                <h2 className='question'>Is this a freelancer friendly course?</h2>
                <p className='mt-5'>Not really!! But you can build your skills properly with guideline.</p>
            </div>
            <div className='questions'>
                <h2 className='question'>How many project tasks are there?</h2>
                <p className='mt-5'>There are 10 to 15 projects which will be given you as assignment.</p>
            </div>
            <div className='questions'>
                <h2 className='question'>How much time will I have to spend regularly to finish regular classes?</h2>
                <p className='mt-5'>It mainly depends on you.But average time is 5 to 7 hours</p>
            </div>
        </div>
    );
};

export default FAQ;