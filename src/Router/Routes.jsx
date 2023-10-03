import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/HOme/Home";
import LogIn from "../Pages/Login/LogIn";
import Register from "../Pages/Register/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
]);

export default router;