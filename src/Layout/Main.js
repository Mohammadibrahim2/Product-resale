import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer/Footer";
import Navbar from "../Pages/SharedPages/Navbar/Navbar";
import Navbar1 from "../Pages/SharedPages/Navbar/Navbar/Navbar1";
import Navbar2 from "../Pages/SharedPages/Navbar/Navbar/Navbar2";
import Navbar3 from "../Pages/SharedPages/Navbar/Navbar/Navbar3";

const Main=()=>{

    return(
        <div>
            <Navbar1></Navbar1>
            <Navbar2></Navbar2>
            <Navbar3></Navbar3>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )


}
export default Main