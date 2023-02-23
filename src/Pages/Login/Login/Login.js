import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import {FaUserAlt,FaArrowAltCircleRight} from "react-icons/fa"
import "./Login.css";
const Googleprovider = new GoogleAuthProvider();

const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const [loginUserEmail, setloginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);
    
   
    
    const from=location.state?.from?.pathname || "/"
    if(token){
        navigate(from,{replace:true})
    }

    const { login, GooglessigninProvider } = useContext(AuthContext);

    const handleGooglelogin = () => {

        GooglessigninProvider(Googleprovider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }

    const handlesubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {

            Email: email,
            Password: password
        }

        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setloginUserEmail(email)
               
              

            })
        form.reset()


    }

    return (
        <div>
            <div className=" ">
                <div className="hero-content flex lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left text-black ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Wellcome back!.</p>
                    </div> */}
                    <div className=" flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handlesubmit} className="p-10  w-full">
                        <h1 className="text-3xl font-bold text-black text-start flex flex-row items-center my-2">
                            <span className="text-2xl mx-2"style={{color:"#ED1D24"}}><FaUserAlt/></span>Login now</h1>
                            {/* <div className="text-center w-full">
                                <img className="w-40 rounded " src="https://www.nicepng.com/png/detail/302-3026464_png-file-svg-login-member-icon-png.png" />
                            </div> */}

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text   text-black font-semibold" style={{fontSize:"16px"}}>User Email  <strong style={{color:"#ED1D24"}}>*</strong> </span>
                                </label>
                                <input type="email" name="email" placeholder="email" className=" py-2 px-3 bg-white border  border-black " />
                            </div>
                            <div className="form-control  text-black font-semibold">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold" style={{fontSize:"16px"}}>User Password  <strong style={{color:"#ED1D24"}}>*</strong> </span>
                                </label>
                                <input type="password" name="password" placeholder="password" className=" py-2 px-3 bg-white border border-black " />
                              
                            </div>
                           
                            <div className="text-black font-semibold my-2 flex flex-row items-center ">Create a new account ? 
                            <Link className="flex flex-row items-center  " style={{color:"#ED1D24"}}> Please Register
                            <span className="ml-2"><FaArrowAltCircleRight/></span></Link></div>
                            <div className="form-control mt-6">
                                <button className=" py-2 px-3  text-white font-semibold" style={{backgroundColor:"#ED1D24"}}>Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGooglelogin} className="py-2 px-3 text-white font-semibold" style={{backgroundColor:"#ED1D24"}}>Google Sign in</button>
                            </div>
                            <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-sm  text-black font-semibold">Lost Your password?</a>
                                </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Login