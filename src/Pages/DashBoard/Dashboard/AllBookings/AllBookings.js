import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const AllOrders=()=>{



const {data, refetch} = useQuery({
  queryKey: ['users'],
  queryFn: async() =>{
      const res = await fetch('https://n-mohammadibrahim2.vercel.app/allorders');
      const data = await res.json();
      return data;
  }
});
console.log(data)


    

    const handleMakeAdmin = id => {
      fetch(`https://n-mohammadibrahim2.vercel.app/users/admin/${id}`, {
          method: 'PUT', 
          headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res => res.json())
      .then(data => {
          if(data.modifiedCount > 0){
              toast.success('Make admin successful.')
              refetch();
          }
      })
  }
  const handleDelete=id=>{
    fetch(`https://n-mohammadibrahim2.vercel.app/allusers/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      toast.success("successfully deleted")
      refetch()
    })
  }
    return(
        <div>
          
            <div className="overflow-x-auto text-xl ">
            <h2 className="text-xl text-start my-3 pl-4   text-black  font-semibold">All Products</h2>
          
  <table className="table text-black w-full  ">

    <thead className="bg-red-10 ">
      <tr className="border">
        <th className=" text-xl text-black" style={{backgroundColor:"#fff"}}>Img</th> 
        <th className=" text-xl text-black" style={{backgroundColor:"#fff"}}>Person</th> 
        <th className=" text-xl text-black" style={{backgroundColor:"#fff"}}>Email</th> 
        <th className=" text-xl text-black" style={{backgroundColor:"#fff"}}>Product Name</th> 
        <th className=" text-xl text-black" style={{backgroundColor:"#fff"}}>Price</th> 
     

        <th className=" text-xl text-black" style={{backgroundColor:"#fff"}}>Action</th> 
       
      </tr>
    </thead> 
    <tbody className="mt-5 text-left " style={{color:"#ed1d24"}}>
    


{data&&
   data.result.map((users,i)=><tr className="py-2">
    
    <td className="bg-white" >
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={users.img} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    
  </div>
</td >
    <th className="bg-white text-sm">{users.title}</th> 
   
  
    <th className="bg-white text-sm">{users.price}</th> 
    <th className="bg-white text-sm ">{users.person}</th> 
    <th className="bg-white text-sm ">{users.email}</th> 
    <th className="bg-white text-sm"><button onClick={ ()=>handleMakeAdmin(users._id)} className="py-2 px-3 bg-zinc-900 text-white">UpDate</button></th> 
    <th className="bg-white text-sm"><button onClick={ ()=>handleDelete(users._id)}className="py-2 px-3 bg-red-600 text-white">Delete</button></th>
  </tr>)


}

</tbody> 
    
    </table>
  </div>
        </div>
    )
}
export default AllOrders