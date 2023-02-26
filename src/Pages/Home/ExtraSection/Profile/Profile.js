import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Cart from "../../Category/Cart/Cart";

const Profile=()=>{

const {user}=useContext(AuthContext)
    return(
        <div>
            <div className="relative">
                <img src="https://webobjects2.cdw.com/is/image/CDW//apple-hero-757?$%20$&$transparent$" className="w-full h-[40vh] object-contain"/>
               
               
            </div>
            {
                user&& 
                <div className="flex flex-col justify-start items-start  px-3  ">
                 <div className="   h-[130px] w-[130px] flex flex-row p-2"style={{backgroundColor:"#000000"}}>
                <img src={user?.photoURL} className=" h-[115px] w-[115px]   "/>
                    
                </div>
                <h1 className="text-black font-semibold">Name: {user?.displayName}</h1>
                <h1 className="text-black font-semibold">Email: {user?.email}</h1>
            </div>
            }
           
        </div>
    )

}
export default Profile