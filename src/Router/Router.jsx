import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
import About from "../Components/About/About";
import Dashbord from "../Components/Dashbord/Dashbord";
import ProductDetails from "../Components/Products/ProductDetails";
import DashbordLayout from "../Components/Dashbord/DashbordLayout";
import { element } from "prop-types";
import EditProfile from "../Components/Profile/EditProfile";
import Profile from "../Components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/dashbord',
                element: <DashbordLayout></DashbordLayout>,
                children:[
                    {
                        path: '/dashbord',
                        element: <Dashbord></Dashbord>
                    },
                    {
                        path: '/dashbord/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashbord/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ] 
            },
        ]
    }

])
export default router;