import { createBrowserRouter } from "react-router-dom";
import Main from "../../Root/Main/Main";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Coursedetails from "../Courses/Coursedetails/Coursedetails";
import Courses from "../Courses/Courses";
import Error from "../Error/Error";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Profilepage from "../Profilepage/Profilepage";
import Register from "../Register/Register";
import Privateroutes from "./Privateroutes/Privateroutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/profile',
                element: <Profilepage></Profilepage>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => {
                    // https://teach-you-com-server.vercel.app/courses/1
                    return fetch(`https://teach-you-com-server.vercel.app/courses/${params.id}`)
                },
                element: <Coursedetails></Coursedetails>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => {
                    // https://teach-you-com-server.vercel.app/courses/1
                    return fetch(`https://teach-you-com-server.vercel.app/courses/${params.id}`)
                },
                element: <Privateroutes><Checkout></Checkout></Privateroutes>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ])
    }
])