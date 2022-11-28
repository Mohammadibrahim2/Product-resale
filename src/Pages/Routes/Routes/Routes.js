import { createBrowserRouter } from "react-router-dom";
import DashBoardLAyout from "../../../DashboardLayout/DashBoardLayout";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import AddProduct from "../../DashBoard/Dashboard/AddProduct/AddProduct";
import Allseller from "../../DashBoard/Dashboard/Allseller/Allseller";
import DashBoard from "../../DashBoard/Dashboard/DashBoard";
import MyBookings from "../../DashBoard/MyBookings/MyBookings";
import Payment from "../../DashBoard/Payment/Payment";
import ProductsOFCategory from "../../Home/Category/CatagoryBasedProducts/Products/Products";
import Home from "../../Home/Home";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import ErrorPage from "../Errorroutes/ErrorPage";
import PrivateRoute from "./Privateroute/PrivateRoute";

export const router=createBrowserRouter([

{
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/category/:title",
            element:<PrivateRoute><ProductsOFCategory></ProductsOFCategory></PrivateRoute>,
            loader:({params})=>fetch(`https://n-mohammadibrahim2.vercel.app/category/${params.title}`)
        },
        



    ]
},
{
    path:"/dashboard",
    element:<PrivateRoute><DashBoardLAyout></DashBoardLAyout></PrivateRoute>,
    children:[

        {
            path:"/dashboard",
            element:<MyBookings></MyBookings>
        },
        {
            path:"/dashboard/allusers",
            element:<DashBoard></DashBoard>
        },
        {
            path:"/dashboard/allseller",
            element:<Allseller></Allseller>,
            loader:()=>fetch("https://n-mohammadibrahim2.vercel.app/users/seller")
        },
        // {
        //     path:"/dashboard/payment",
        //     element:<Payment></Payment>
           
        // },
        {
            path:"/dashboard/allproduct",
            element:<AddProduct></AddProduct>
        }
        
    ]
},
{
    path:"*",
    element:<ErrorPage></ErrorPage>
}


])