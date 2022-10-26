import { createBrowserRouter } from "react-router-dom";
import Main from "../../Root/Main/Main";
import Blog from "../Blog/Blog";
import Coursedetails from "../Courses/Coursedetails/Coursedetails";
import Courses from "../Courses/Courses";
import Error from "../Error/Error";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
                path: '/courses/:id',
                loader: ({ params }) => {
                    // https://teach-you-com-server.vercel.app/courses/1
                    return fetch(`https://teach-you-com-server.vercel.app/courses/${params.id}`)
                },
                element: <Coursedetails></Coursedetails>
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