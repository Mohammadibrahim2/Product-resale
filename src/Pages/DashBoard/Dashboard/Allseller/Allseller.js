
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
          
            <div> <h2 className="text-2xl my-3 text-start  text-black font-semibold">All Sellers</h2></div>
            <div className="overflow-x-auto text-xl ">
  <table className="table text-black w-full  ">
    <thead className=" w-full ">
      <tr className="w-full">
      <th className=" text-xl  bg-white text-black">Image</th> 
      <th className=" text-xl  bg-white text-black">Role</th> 
        
        <th className=" text-xl  bg-white text-black">Name</th> 
 
        
        <th className=" text-xl  bg-white text-black">Email</th> 
        <th className=" text-xl bg-white text-black">Delete</th> 
       
         
       
      </tr>
    </thead> 
    <tbody className="mt-5 text-left text-white">
    


{
    Sellers.map((seller,i)=><tr className="py-5 bg-white">
   
   
   <td className="bg-white" >
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={seller.photoURL} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    
  </div>
</td>
<th className="bg-white text-sm  text-black">{seller.role}</th> 
<th className="bg-white text-sm   text-black" >{seller.name}</th>


<th className="bg-white text-sm   text-black">{seller.email}</th> 
   
<th className="bg-white text-sm   text-black"><button className="py-2 px-3 text-white text-sm" style={{backgroundColor:"#ed1d24"}} onClick={()=>handleDelete(seller._id)}>Delete</button></th> 
   
   
  </tr>)
}

</tbody> 
    
    </table>
  </div>
        </div>
    )
}
export default Allseller
