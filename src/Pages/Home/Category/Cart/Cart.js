import React, { useContext } from "react";
import Navigation from "../../ExtraSection/Navigation";
import {RiDeleteBin5Fill} from "react-icons/ri"
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";

const Cart=()=>{

    const [items,setItems]=useState([])
    console.log(items)
    const {user,setcountItems}=useContext(AuthContext)
   
 const email=user?.email;
console.log(email)


const newArray=[]
const array2 = items;

array2.forEach(element => {
   
    
newArray.push(element.price);
   
})



const initialValue = 0;
const sumWithInitial = newArray.reduce(
(accumulator, currentValue) => accumulator + currentValue,
initialValue
);
console.log(sumWithInitial);
const vat=sumWithInitial*(3/100);
console.log(vat)
const fullTotal=sumWithInitial+vat




 const {refetch,loading}=useQuery({
        queryKey:['email'],
        queryFn:()=>fetch(`https://n-mohammadibrahim2.vercel.app/addtocart?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
          setItems(data.result)
          setcountItems(data.count)
          console.log(data.cursor)
        })
      
        
      
      })


      const handleDelete=(id)=>{

        console.log(id)
       fetch(`https://n-mohammadibrahim2.vercel.app/addtocart/${id}`,{
       method:"DELETE"})
       .then(res=>res.json())
       .then(data=>{
        
        console.log(data)
        if(data.deletedCount===1){
            toast.success("Successfull deleted your products.Than you !")
            refetch()
          
           
        }
      
       })

      }
    
    return(
        <div>
            <div>
    <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
    </ScrollToTop>
               <Navigation title={"My Cart"} main={"Home"}></Navigation>
                </div>

                {
                    items?  <div className="flex lg:flex-row flex-col w-[95%] mx-auto">
                    
                    <div >
                    {
                    items.map(item=>
                        <div className=" lg:w-auto px-2 w-full flex lg:flex-row flex-col lg:justify-between justify-start lg:items-baseline items-end border">
                        <div className="flex flex-row justify-center items-center"> 
                        
        
                        
                        <div className="w-[120px] h-[120px] p-2 bg-zinc-100 rounded-md">
                            <img src={item.img} className="w-full h-full rounded-lg object-contain"
                            />
        
                        </div>
                        <div className="info text-black font-semibold text-start lg:ml-3 flex flex-row items-center justify-around">
                            <div>
    
                            <h2 className="hover:text-red-600 text-xl">{item.title}</h2>
                            <h2>Customer: {user?.displayName}</h2>
                            </div>
                           
    
        
                        </div>
                        </div>
                        <div className="text-black font-semibold"> <h2>{item.price} <span className="text-red-600">Tk.</span></h2></div>
                        <div className="flex flex-row-reverse items-center mr-3">
                        <button onClick={()=>handleDelete(item._id)}  className="text-3xl " style={{color:"#ed1d24"}}><RiDeleteBin5Fill/></button>
                           
                        </div>
        
        
                    </div>
                        
                        )
                }
                
             
    
                    </div>
                    <div className=" lg:w-1/3 w-full px-0 mx-auto ">
                        <h1 className="text-black font-semibold bg-zinc-200 my-3 py-2">CART TOTALS</h1>
                        <div className="text-black font-semibold lg:text-end text-center w-full  my-3 border-2 pr-5">
    
                        <h1> SubTotal  ={sumWithInitial} Tk.</h1>
                        <h1> Vat={vat} Tk.</h1>
                        <h1> Total  ={fullTotal} Tk.</h1>
                        <button className="py-2 px-3  text-white text-sm my-2" style={{backgroundColor:"#ed1d24"}}>CheckOut </button>
                    </div>
                    </div>
    
                      </div>: 
                      <div>
                    <h1>No Products.PleaseGo to <Link to="/shop" style={{color:"#ed1d24"}}>Shop</Link></h1>
                  </div>
                      
                }
              

        </div>
    )


}
export default Cart