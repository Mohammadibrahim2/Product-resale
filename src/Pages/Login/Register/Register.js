import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../../Hooks/useToken";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import {RiLoginBoxFill} from "react-icons/ri"

import { useForm } from "react-hook-form";
import "./Register.css"
import { AiOutlineConsoleSql } from "react-icons/ai";

const Googleprovider = new GoogleAuthProvider();
const Register = () => {

   
    const navigate=useNavigate()
    const [data,setData]=useState( )
    const {register,formState: { errors }, handleSubmit}=useForm()
    const {signin,updateUser,GooglessigninProvider,updateUserProfile,user}=useContext(AuthContext)
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    
    if(token){
        navigate('/');
    }
    const {GoogleSignin}=useContext(AuthContext)
    const handleGooglelogin=()=>{
       

        GooglessigninProvider(Googleprovider)
        .then(result=>{
            const user=result.user
            console.log(user)
        })
    }
    // const navigate=useNavigate()
    const handleSinup=alldata=>{
        console.log(alldata)
        const image=alldata.photo[0]
        console.log(alldata.photo[0])

        const formData=new FormData()
        formData.append("image",image)
        const url="https://api.imgbb.com/1/upload?expiration=600&key=acbca0356cf868436c7c6a4a4783d467"
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(img=>{
            if(img.success){
                console.log(img.data.url)
               
                signin(alldata.email,alldata.password)
                .then(result=>{
                    toast.success("your successfully Regitered ")
                    const user=result.user
                    console.log(user)
        
                    const userInfo={
                        photoURL:img.data.url,
                        displayName : alldata.userName 
                      
                    }
                    updateUser(userInfo)
                    .then(()=>{})



                    const userInfoDetails =userInfo
                    userInfoDetails.email=alldata.email;
            
                    fetch('https://n-mohammadibrahim2.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userInfoDetails)
                        })
                        .then(res => res.json())
                        .then(data =>{
                            if(data.acknowledged===true){
                                toast.success('Successfully registered')
                                // setCreatedUserEmail(email);
                               
            
                            }
                          
                        })
                    
                })
                  
       
        
            }
            console.log(img)
          
        })
      
    console.log(user)
   
     
   
    
     
     //  setPhoto(img.data.url)
    //         const userInfo={
    //             displayName : userProName,
    //              role:userRole,
             
    //         }
               
    //         updateUser(userInfo)
    //         .then(()=>{
    //              saveUser(userProName, email,userRole);
                 

    //         })
           
            
            
          
    //     })
      
     
    }
  
    
    

    return (
        <div>
            <div className="hero ">
               
                    
                    <div className="card flex-shrink-0 w-full">
                        <form onSubmit={handleSubmit(handleSinup)} className="p-10 ">
                            <h1 className="flex flex-row items-center text-3xl text-black font-bold my-3">
                            <span style={{color:"#ed1d24"}} className="text-3xl mr-2"><RiLoginBoxFill/></span> Register </h1>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold "style={{fontSize:"16px"}}>User Name <span style={{color:"#ed1d24"}}> *</span></span>
                                </label>
                                <input type="text" {...register("userName",{required:"text is requred" })} className="border-black py-2 px-3 bg-white text-black border"/>
                            </div>

    

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-semibold">Photo <span style={{color:"#ed1d24"}}> *</span></span>
                                </label>
                                <input type="file" {...register("photo",{required:"file is requred" })} className="border-black py-2 px-3 bg-white text-black border"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold "style={{fontSize:"16px"}}>Email Adress <span style={{color:"#ed1d24"}}> *</span></span>
                                </label>
                                <input type="email" {...register("email",{required:"text is requred" })} className="border-black py-2 px-3 bg-white text-black border"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-semibold" style={{fontSize:"16px"}}>Password <span style={{color:"#ed1d24"}}> *</span></span>
                                </label>
                                <input type="password" {...register("password",{required:"text is requred" })} className="border-black py-2 px-3 bg-white text-black border"/>
                               
                            </div>
                            <select name="userRole"className="py-2 px-3  border-black w-full bg-white text-black border my-3">
                            <option className="font-semibold" style={{color:"#ed1d24"}}>Admin</option>
                                <option  className="font-semibold "style={{color:"#ed1d24"}}>Buyer</option>
                                <option  className="font-semibold" style={{color:"#ed1d24"}}>Seller</option>
                            </select>
                            <div className="text-black font-semibold">Already have an account ? <Link className="font-semibold" style={{color:"#ed1d24"}} >Please Login</Link></div>
                            <div className="form-control mt-6">
                                <button className="px-3 py-2 text-white font-semibold" style={{backgroundColor:"#ed1d24"}}>Register</button>
                              
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGooglelogin}className="px-3 py-2 text-white font-semibold" style={{backgroundColor:"#ed1d24"}}>Google sign in</button>
                              
                            </div>
                        </form>
                    </div>
              
            </div>
           
        </div>
    )


}
export default Register