
import React, { useState }  from "react";
import { useLoaderData } from "react-router-dom";

import toast from "react-hot-toast";


const Allseller=()=>{
  
 
const Sellers=useLoaderData()
console.log(Sellers,"hello vai")
const [verified,setVerified]=useState(false)

const handleVerified=(email)=>{

    fetch(`https://n-mohammadibrahim2.vercel.app/${email}`,{
        method:"PUT"
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged===true){
            setVerified(true)
        }
        toast.success("successfullyverified")
    })

}
const handleDelete=(id)=>{

    fetch(`https://n-mohammadibrahim2.vercel.app/seller/${id}`,{
        method:"DELETE"
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        toast.success("successfully deleted")
    })

}
      
  
    return(
        <div>
          
            <div> <h2 className="text-3xl  text-black font-semibold">All Sellers</h2></div>
            <div className="overflow-x-auto text-xl ">
  <table className="table text-black w-full  ">
    <thead className="bg-red-10 w-full ">
      <tr className="w-full">
      <th className=" text-xl bg-red-200">Image</th> 
      <th className=" text-xl bg-red-200">Role</th> 
        
        <th className=" text-xl bg-red-200">Name</th> 
 
        
        <th className=" text-xl bg-red-200">Email</th> 
        <th className=" text-xl bg-red-200">Delete</th> 
        <th className=" text-xl bg-red-200">verification</th> 
         
       
      </tr>
    </thead> 
    <tbody className="mt-5 text-left text-white">
    


{
    Sellers.map((seller,i)=><tr className="py-5">
   
   
    <td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={seller.photoURL} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    
  </div>
</td>
<th>{seller.name}</th>


    <th>{seller.email}</th> 
    <th>{seller.role}</th> 
    <th><button className="btn btn-error"onClick={()=>handleDelete(seller._id)}>Delete</button></th> 
    <th><button className="btn btn-success" onClick={()=>handleVerified(seller.email)}>verification</button></th> 
   
  </tr>)
}

</tbody> 
    
    </table>
  </div>
        </div>
    )
}
export default Allseller
