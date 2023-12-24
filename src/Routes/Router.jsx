import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import PhoneDetails from "../Pages/Home/Phones/PhoneDetails/PhoneDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/phonedetails/:Id',
                element: <PhoneDetails></PhoneDetails>,
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/phones/`)
                    const data = await res.json()
                    const useforloader = data.find(singeldata => singeldata?._id == params.Id)
                    return useforloader
                }
            }
        ]
    },
]);