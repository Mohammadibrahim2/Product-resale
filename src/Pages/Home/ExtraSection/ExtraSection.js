import React, { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ExtraSection = () => {

    const {user}=useContext(AuthContext)
    return (
        <div className="flex justify-center bg-red-50">
            <div className=" min-h-screen ">
                <div className="hero-content flex-col ">
                    <img src="https://img.freepik.com/premium-vector/comfortable-chair-lamp-house-plants-scandinavian-interior-vector-flat-cartoon-illustration_357257-397.jpg?w=2000" 
                    className="max-w-sm " />
                    <div className="text-black">
                        <h1 className="text-5xl font-bold">Take 10% off at your first purchase</h1>
                        <p className="py-6 text-2xl">sign up for the latest update,products and offers.</p>
                         <form className="flex justify-center">
                         <input type="email" 
                          className="input w-full max-w-xs rounded-none text-black bg-white border bodred-black " />
                          <Link to="/dashboard"> <button className="btn bg-orange-700 text-white  rounded-none  border border-transparent ">
                            <HiArrowNarrowRight className="  rounded-none text-2xl"></HiArrowNarrowRight></button> </Link>
                            
                         </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ExtraSection