import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const DashBoard=()=>{



const {data: allusers = [], refetch} = useQuery({
  queryKey: ['users'],
  queryFn: async() =>{
      const res = await fetch('http://localhost:5000/allusers');
      const data = await res.json();
      return data;
  }
});


    

    const handleMakeAdmin = id => {
      fetch(`http://localhost:5000/users/admin/${id}`, {
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
    fetch(`http://localhost:5000/allusers/${id}`,{
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
            <h2 className="text-3xl bg-white text-black py-5 ">Allusers</h2>
  <table className="table text-black w-full  ">
    <thead className="bg-red-10 ">
      <tr className="border">
        <th className=" text-xl bg-orange-100">Img</th> 
        <th className=" text-xl bg-orange-100">Name</th> 
        <th className=" text-xl bg-orange-100">Email</th> 
        <th className=" text-xl bg-orange-100">Role</th> 
        <th className=" text-xl bg-orange-100">Id</th> 
        <th className=" text-xl bg-orange-100">Last Login</th> 
       
      </tr>
    </thead> 
    <tbody className="mt-5 text-left text-white">
    


{
   allusers.map((users,i)=><tr className="py-5">
    
    <td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={users.photoURL} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    
  </div>
</td>
    <th>{users.name}</th> 
   
    <th>{users.email}</th> 
    <th>{users.role}</th> 
    <th><button onClick={ ()=>handleMakeAdmin(users._id)} className="btn btn-success">Admin</button></th> 
    <th><button onClick={ ()=>handleDelete(users._id)}className="btn btn-error">Delete</button></th>
  </tr>)


}

</tbody> 
    
    </table>
  </div>
        </div>
    )
}
export default DashBoard