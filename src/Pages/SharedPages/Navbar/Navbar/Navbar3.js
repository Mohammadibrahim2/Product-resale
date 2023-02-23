import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Navbar3=()=>{

    const {user}=useContext(AuthContext)
    const items=[
        <Link to="/"><li>Home</li></Link>,
        <Link to="/shop"><li>Shop</li></Link>,
        <Link to="/blog"><li>Blog</li></Link>,
        <Link to="/contact"><li>Contact Us</li></Link>,
       
        <>{user?
                        <>
                         <li><Link to="/dashboard">DashBoard</Link></li> 
                         <li><Link to="/"><button >Log out</button></Link></li>
                        </>
                       :
                       <Link to="/login"><li>Log in</li></Link>
                       
                    }
                    </>
    ]
    
    return(
        <div className=" py-4 px-5 drop-shadow-md border border-t-gray-200 w-full h-auto " style={{backgroundColor:"#ED1D24 "}}>
            <div className="text-white w-full h-full  flex flex-row-reverse justify-between font-medium"style={{fontSize:"14px"}}>
                <div> Hotline :01632846454</div>
                <div className="list-none flex flex-row justify-between items-center w-[40%] ">
                    {items}
                </div>
            </div>

        </div>
    )

}
export default Navbar3