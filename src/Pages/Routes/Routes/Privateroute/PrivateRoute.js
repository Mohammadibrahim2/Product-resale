import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const PrivateRoute=({children})=>{
    const {user,loading}=useContext(AuthContext)
    console.log(user)
    const location=useLocation();
    if(loading){
        return<h1>Loading...</h1>
    }
    if(user){
        return children
    }
    else{
        return<Navigate to="/login" state={{from:location}}replace></Navigate>    }

  
        //

}
export default PrivateRoute