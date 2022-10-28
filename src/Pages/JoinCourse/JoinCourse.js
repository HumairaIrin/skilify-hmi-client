import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const handlePaymentRequest = () => {
    toast.success('Your request is on process')
}
const JoinCourse = () => {
    const course = useLoaderData();
    const { title } = course;


    return (
        <div className='bg-white rounded-2xl w-[80%] mx-auto mt-3 mb-10 p-[2%]'>
            <h2 className='text-2xl text-center font-bold text-teal-600'>Ready to join <span className='text-2xl font-bold text-teal-700'> {title}</span></h2>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 my-3 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please provide your name and contact no. After getting message provide your payment id..</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Contact No</label>
                                    <input type="text" id="email" name="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Add your payment id</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button onClick={handlePaymentRequest} className="flex mx-auto text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinCourse;