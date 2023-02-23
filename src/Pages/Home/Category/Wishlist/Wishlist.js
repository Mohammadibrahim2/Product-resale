import React from "react";
import Navigation from "../../ExtraSection/Navigation";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";
const Wishlist=()=>{

const [items,setItems]=useState([])

    //http://localhost:5000/addtowish/mohammadibrahim6454@gmail.com

    const {user}=useContext(AuthContext)

    const {refatch,loading}=useQuery({
        queryKey:['user.email'],
        queryFn:()=>fetch(`http://localhost:5000/addtowish?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
          setItems(data)
          console.log(data)
        })
      
        
      
      })


const handleCart=(id,item)=>{
  const {img,title,price,odlPrice,rating,category,type}=item
    const cartitems={img,title,price,odlPrice,rating,category,type}
    cartitems.no=item._id
   
    cartitems.person=user?.displayName;
    cartitems.email=user?.email;
    console.log(id,item)
    fetch(`http://localhost:5000/addtocart/${user?.email}`,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify( cartitems)
    
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.acknowledged===true){
      toast.success("Successfull added your products.Thank you!")
    }
   })
  }
  

    return(
        <div>
            <div>
            <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
    </ScrollToTop>
            <Navigation title={"Wishlist"} main={"Home"}></Navigation>
            <div className="my-5">

        
            {items&&
                items.map(item=>
                    <div className=" lg:w-2/3 mx-auto px-2 w-full flex lg:flex-row flex-col lg:justify-between justify-start items-center border">
                    <div className="flex flex-row justify-center items-center"> 
    
                    
                    <div className="w-[120px] h-[120px] p-2 bg-zinc-100 rounded-md">
                        <img src={item.img} className="w-full h-full rounded-lg object-contain"
                        />
    
                    </div>
                    <div className="info text-black font-semibold text-start lg:ml-3">
                        <h2 className="hover:text-red-600 text-xl">{item.title}</h2>
                        <h2>{item.price} <span className="text-red-600">Tk.</span></h2>
                        <h2>{item.time}</h2>
    
                    </div>
                    </div>
                    <div>
                    <button  onClick={()=>handleCart(item._id,item)} className=" text-white px-3 py-2"  style={{backgroundColor:"#ed1d24"}}>Add to cart</button>
                    </div>
    
    
                </div>
                    
                    )
            }
                </div>
           
                </div>
        </div>
    )


}
export default Wishlist