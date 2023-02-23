import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
const UserMessage=()=>{



const {data: allusers = [], refetch} = useQuery({
  queryKey: ['users'],
  queryFn: async() =>{
      const res = await fetch('https://n-mohammadibrahim2.vercel.app/addmessage');
      const data = await res.json();
      return data;
  }
});


  console.log(allusers)  

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
        <div className="p-2">
          
            <div className="overflow-y-auto text-xl bg-white lg:w-2/3 mx-auto w-full p-2 rounded-sm h-[300px] ">
            <h2 className="text-xl text-start  text-black  font-semibold ml-5 border-b-2 border-b-red-600">Inbox</h2>
            <div>
                {
                    allusers.map(user=><div className="flex flex-row items-center my-3 justify-around border-b-2">
                        <img src="https://i.pinimg.com/originals/14/3c/19/143c1994f1143c713ac2b760d588c5d7.jpg" className="w-[40px] h-[40px] rounded-full"/>
                        <div className="text-sm font-semibold text-start">
                            <h1 className="text-black">{user.name}</h1>
                            <h1 className="text-zinc-700">{user.message.slice(0,25)} ...</h1>
                        </div>
                        <div className=" font-semibold text-red-600" style={{fontSize:"10px"}}>
                            <h1>{user.postDate.day}</h1>
                            <div className="flex flex-row justify-between">
                            <h1>{user.postDate.hour}</h1>:
                            <h1>{user.postDate.min}</h1> 
                            <h1>{user.postDate.po}</h1>
                            </div>
                            
                        </div>
                    </div>)
                }
            </div>
          
  
  </div>
        </div>
    )
}
export default UserMessage