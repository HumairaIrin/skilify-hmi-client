import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Courses from '../Pages/Courses/Courses';
import FAQ from '../Pages/FAQ/FAQ'
import Blog from '../Pages/Blog/Blog'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import JoinCourse from "../Pages/JoinCourse/JoinCourse";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => {
                    return fetch('https://skilify-hmi-server.vercel.app/courses')
                }
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => {
                    return fetch(`https://skilify-hmi-server.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/courses/join-course/:id',
                element: <PrivateRoute><JoinCourse></JoinCourse></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://skilify-hmi-server.vercel.app/courses/${params.id}`)
                }
            }
        ]
    }
])