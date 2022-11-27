import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

import "./Register.css"

const Googleprovider = new GoogleAuthProvider();
const Register = () => {
    const navigate=useNavigate()

    const {signin,updateUser,GooglessigninProvider}=useContext(AuthContext)
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    
    if(token){
        navigate('/');
    }

    const handleGooglelogin=()=>{
       

        GooglessigninProvider(Googleprovider)
        .then(result=>{
            const user=result.user
            console.log(user)
        })
    }
    // const navigate=useNavigate()
    const handlesubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const userProName=form.userName.value;
        const email=form.email.value;
        const password=form.password.value;
        const userRole=form.userRole.value;
        const PhotoURL=form.PhotoURL.value
        console.log(userProName)
        
        signin(email,password)
        
        .then(result=>{
            const user=result.user;
            console.log(user)
           

            const userInfo={
                displayName : userProName,
                 role:userRole,
                photoURL:PhotoURL
            }
               
            updateUser(userInfo)
            .then(()=>{
                 saveUser(userProName, email,userRole,PhotoURL);
                 

            })
           
            
            
          
        })
      
         
    }
    const saveUser = (name, email, role,photoURL) =>{
        const Nuser ={name, email, role,photoURL};

        fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Nuser)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.acknowledged===true){
                    toast.success('Successfully registered')
                    setCreatedUserEmail(email);
                   

                }
              
            })
       
    }
    
    
    

    return (
        <div>
            <div className="hero min-h-screen registerbg">
                <div className="hero-content flex lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-black">
                        {/* <h1 className="text-5xl font-bold">Register Now</h1>
                        <p className="py-6">Wellcome back!.</p> */}
                        <img src="https://www.planstudyabroad.uniagents.com/images/login.png"/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit} className="p-10 formbg">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="userName" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text"name="PhotoURL" placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"name="password" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <select name="userRole"className="select select-bordered w-full max-w-xs">
                               
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                            <div>Already have an account ? <Link className=" text-cyan-300" to="/login">please Login</Link></div>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-300 text-black">Register</button>
                              
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGooglelogin}className="btn bg-cyan-300 text-black">Google sign in</button>
                              
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    )


}
export default Register