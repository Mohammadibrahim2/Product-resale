import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
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
            <div className="hero min-h-screen bg-red-100">
                <div className="hero-content flex lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-white ">
                        {/* <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Wellcome back!.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit} className="p-10  w-full">
                            <div className="text-center w-full">
                                <img className="w-40 rounded " src="https://www.nicepng.com/png/detail/302-3026464_png-file-svg-login-member-icon-png.png" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                           
                            <div>Create a new account ? <Link className="text-red-400" to="/register">please Register</Link></div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-400 text-black">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGooglelogin} className="btn bg-red-400 text-black">Google Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Login