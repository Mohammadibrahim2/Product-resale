import { createBrowserRouter } from "react-router-dom";
import DashBoardLAyout from "../../../DashboardLayout/DashBoardLayout";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
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
            path:"/category/:id",
            element:<PrivateRoute><ProductsOFCategory></ProductsOFCategory></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
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
            loader:()=>fetch("http://localhost:5000/users/seller")
        },
        {
            path:"/dashboard/payment",
            element:<Payment></Payment>
           
        }
        
    ]
},
{
    path:"*",
    element:<ErrorPage></ErrorPage>
}


])