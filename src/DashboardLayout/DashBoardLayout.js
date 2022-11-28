
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Pages/Context/AuthProvider/AuthProvider";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
const DashBoardLAyout = () => {

    const{user}=useContext(AuthContext)
    console.log(user.email
        )
    return (
        <div className="">
            <Navbar></Navbar>
            
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content"> 
                <Outlet></Outlet>
                </div>
               
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-red-100 text-black font-semibold text-xl">
                        <li><Link to="/dashboard">Orders</Link></li>
                        
                            { user.email==="raj@ahmed.com"&&<ul><li><Link to="/dashboard/allusers">All users</Link></li>
                            <li><Link to="/dashboard/allseller">All Seller</Link></li> </ul>
                           
                        
                        
                            }
                           <li><Link to="/dashboard/allproduct">Add Product</Link></li>
                        
                       
                    </ul>
                  
                </div>
            </div>
        
        </div>
    )
}
export default DashBoardLAyout