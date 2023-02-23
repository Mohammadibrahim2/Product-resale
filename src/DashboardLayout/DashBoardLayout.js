
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { AuthContext } from "../Pages/Context/AuthProvider/AuthProvider";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import Navbar1 from "../Pages/SharedPages/Navbar/Navbar/Navbar1";
import Navbar2 from "../Pages/SharedPages/Navbar/Navbar/Navbar2";
import Navbar3 from "../Pages/SharedPages/Navbar/Navbar/Navbar3";
const DashBoardLAyout = () => {

    const{user}=useContext(AuthContext)
    console.log(user?.email
        )
    return (
        <div className="bg-zinc-200">
         <Navbar1></Navbar1>
            <Navbar2></Navbar2>
            <Navbar3></Navbar3>
            
            <div className="drawer drawer-mobile ">
             
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content"> 

                <Outlet></Outlet>
                </div>
              
                <div className="drawer-side bg-zinc-900" style={{backgroundColor:"",color:"#ffffff"}}>
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <img src="https://i.pinimg.com/originals/14/3c/19/143c1994f1143c713ac2b760d588c5d7.jpg" className="w-[70px] h-[70px] mx-auto mt-2" />
                    <h2 style={{color:"#ed1d24"}}>Noakhali It Center</h2>
                    <ul className="menu px-4 w-55  font-semibold text-sm">
                    <li><Link to="/dashboard">DashBoard</Link></li>
                        <li><Link to="/dashboard/mybookings">Our Products</Link></li>
                        
                            { user?.email==="mohammadibrahim6454@gmail.com"&&<ul>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                            <li><Link to="/dashboard/allseller">All Seller</Link></li> 
                            <li><Link to="/dashboard/allproduct">Add Product</Link></li>
                            <li><Link to="/dashboard/allorders">All Orders</Link></li>
                            </ul>
                           
                        
                        
                            }
                          
                        
                       
                    </ul>
                    <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
    </ScrollToTop>
                  
                </div> 
            </div>
        
        </div>
    )
}
export default DashBoardLAyout