import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Navbar1=()=>{

    const{user,logout}=useContext(AuthContext)
        const handleLogout=()=>{
            logout()
            .then(()=>{})
          }
    const items=[
        <Link to="/"><li>English</li></Link>,
        <>{
            user?
            <Link><button onClick={handleLogout}>  Log Out</button></Link>:
            <Link to="/login"><li>Login / Sign up</li></Link>
        }
        
        </>
      
        // <Link to="/"><li>Wishlist</li></Link>,
        // <Link to="/"><li>Wishlist</li></Link>,
        // <Link to="/"><li>Wishlist</li></Link>
    ]
    return(
        <div className=" sticky lg:relative top-[0] lg:top-0 z-50 lg:py-4 py-2 lg:px-5 px-2 w-full h-auto bg-black text-white font-semibold"style={{backgroundColor:""}}  >
            <div className=" w-full h-full  flex flex-row justify-between "style={{fontSize:"14px"}}>
                <div className="flex flex-row  text-sm  "><h2 className="hidden lg:block">01632846454</h2>
                <span className="mx-3 lg:block hidden">|</span> 
                <h2 className="text-red-600">Maijdee,Noakhali</h2></div>
                <div><h2 className="hidden lg:block">welcome in our Electronics center</h2></div>
                <div className="list-none flex flex-row  justify-around items-center lg:w-[20%] w-[40%] text-red-600   "  >
                    {items}
                </div>
            </div>

        </div>
    )

}
export default Navbar1