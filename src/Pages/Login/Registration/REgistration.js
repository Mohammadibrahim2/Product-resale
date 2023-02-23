import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
const Registration = () => {

    return (
        <div className="w-full h-auto bg-white">
            <div className="flex lg:flex-row flex-col justify-around w-full h-auto">

                    
                       <Login></Login>
                        <div className="divider lg:divider-horizontal divider-vertical text-2xl text-red-600 font-semibold">OR</div>
                        <Register></Register>
                  

              
               
            </div>
        </div>
    )
}
export default Registration