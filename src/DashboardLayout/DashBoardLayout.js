
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
const DashBoardLAyout = () => {
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
                    <ul className="menu p-4 w-80 bg-orange-50 text-black font-semibold text-xl">
                        <li><Link to="/dashboard">Orders</Link></li>
                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/allseller">All Seller</Link></li>
                    </ul>
                  
                </div>
            </div>
        
        </div>
    )
}
export default DashBoardLAyout