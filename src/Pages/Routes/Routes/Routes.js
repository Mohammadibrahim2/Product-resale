import { createBrowserRouter } from "react-router-dom";
import DashBoardLAyout from "../../../DashboardLayout/DashBoardLayout";
import Main from "../../../Layout/Main";
import Blog from "../../Blog/Blog";
import Blog1 from "../../Blog/BlogLg";
import Contact from "../../ContactUs/ContactUs";
import AddProduct from "../../DashBoard/Dashboard/AddProduct/AddProduct";
import AllOrders from "../../DashBoard/Dashboard/AllBookings/AllBookings";
import Allseller from "../../DashBoard/Dashboard/Allseller/Allseller";
import DashBoard from "../../DashBoard/Dashboard/DashBoard";
import DashBoardMain from "../../DashBoard/Dashboard/DashBoardMain";
import AllProducts from "../../DashBoard/MyBookings/MyBookings";
import MyBookings from "../../DashBoard/MyBookings/MyBookings";
import Payment from "../../DashBoard/Payment/Payment";
import Cart from "../../Home/Category/Cart/Cart";


import ProductsOFCategory from "../../Home/Category/CatagoryBasedProducts/Products/Products";
import Wishlist from "../../Home/Category/Wishlist/Wishlist";
import Profile from "../../Home/ExtraSection/Profile/Profile";
import Home from "../../Home/Home";

import Registration from "../../Login/Registration/REgistration";
import SearchItems from "../../Shop/SearchItems";
import Shop from "../../Shop/Shop";
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
            path:"/shop",
            element:<Shop></Shop>
        },
        // {
        //     path:"/shop/:name",
        //     element:<SearchItems></SearchItems>,
        //     loader:(params)=>fetch(`http://localhost:5000/allproducts/${params.name}`)
        // },
        {
            path:"/blog",
            element:<Blog1></Blog1>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        },
        {
            path:"/wishlist",
            element:<Wishlist></Wishlist>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
        {
            path:"/login",
            element:<Registration></Registration>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
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
            path:"/dashboard/mybookings",
            element:<AllProducts></AllProducts>
        },
        {
            path:"/dashboard",
            element:<DashBoardMain></DashBoardMain>
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
        },
        {
            path:"/dashboard/allorders",
            element:<AllOrders></AllOrders>
        }
        
    ]
},
{
    path:"*",
    element:<ErrorPage></ErrorPage>
}


])