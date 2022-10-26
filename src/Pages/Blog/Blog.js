import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-section w-[50%] mx-auto bg-purple-300 p-5 rounded-lg mb-5 md:flex-col'>
            <h3 className='text-2xl font-bold mb-2' style={{ color: 'rgb(46 87 84)' }}>Important Question you might face during interviews.</h3>
            <div className='questions'>
                <h2 className='question'>What is cors?</h2>
                <p className='mt-6'>Cross-origin resource sharing or CORS is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
            </div>
            <div className='questions'>
                <h2 className='question'>Can I see the bonus videos without finishing the main course videos?</h2>
                <p className='mt-6'>There are various types of advantaged in firebase auth system.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    <br />
                    <span className='font-semibold mt-4'>Some other authentication system are</span><br />
                    STYTCH. <br />
                    Ory. <br />
                    Supabase. <br />
                    Okta. <br />
                    PingIdentity. <br />
                    Keycloak. <br />
                    Frontegg. <br />
                    Authress. <br />
                </p>
            </div>
            <div className='questions'>
                <h2 className='question'>How does the private route work?</h2>
                <p className='mt-6'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated or Logged in.</p>
            </div>
            <div className='questions'>
                <h2 className='question'>How many project tasks are there?</h2>
                <p className='mt-6'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.
                    <br />
                    <span className='mt-4'>NodeJS is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        <br />  Node.js basically works on two concept <br />
                        Asynchronous <br />
                        Non-blocking I/O</span>
                </p>
            </div>
        </div>
    );
};

export default Blog;