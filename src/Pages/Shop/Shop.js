import React, { useContext, useState } from "react";
import Navigation from "../Home/ExtraSection/Navigation";
import "./Shop.css";
import { useQuery } from "@tanstack/react-query";
import {AiOutlineStar,AiOutlineHeart} from "react-icons/ai"
import { ImLoop} from 'react-icons/im';
import {GrShop} from 'react-icons/gr';
import SubShop from "./SubShop";
import SubShop1 from "./SubShop1";
import ScrollToTop from "react-scroll-to-top";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { IoIosArrowForward } from "react-icons/io";
const Shop=()=>{

    const [items,setItems]=useState([])
   
    const [page,setPage]=useState({pageno:0})
    const [count,setCount]=useState({countno:0})
    
    const size=10
    let pages
    const totalcount=items?.data?.count
    const products=items?.data?.result 
    if(totalcount){
        pages= Math.ceil( totalcount/ size)
    }
    else{
    pages= Math.ceil( 12/ size)
    }
    


    // const {user}=useContext(AuthContext)
   
const {refetch,loading}=useQuery({
  queryKey:['type'],
  queryFn:()=>fetch(`https://n-mohammadibrahim2.vercel.app/allproducts?size=${size}&page=${page.pageno}`)
  .then(res=>res.json())
  .then(data=>{
    setItems({data})
    setCount({data})
    console.log(data)
  })
})

const handlePage=(num)=>{
    setPage(prevState=>({
        ...prevState,
        pageno:num,
    }))
    refetch()
}


const hanldeCategory=(category)=>{
    const handlePage=(num)=>{
        setPage(prevState=>({
            ...prevState,
            pageno:0,
        }))
        refetch()
    }
   const cat=category
   fetch(`https://n-mohammadibrahim2.vercel.app/allproducts/${cat}?size=${size}&page=${page.pageno}`

   )
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    setItems({data})
   
   })
  

}


const {user}=useContext(AuthContext)
// console.log(user.displayName,user.email
//   )
   
const handleCart = (item) => {

    const { img, title, price, odlPrice, rating, category, type } = item
    const cartitems = { img, title, price, odlPrice, rating, category, type }
    cartitems.no = item._id

    cartitems.person = user?.displayName;
    cartitems.email = user?.email;
    console.log(cartitems)
    fetch(`https://n-mohammadibrahim2.vercel.app/addtocart/${user?.email}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(cartitems)

    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          toast.success("Successfully added your products.Thank you!")
        
        }
      })
  };

  
const handleWish = (item) => {
console.log( item)

const { img, title, price, odlPrice, rating, category, type } = item
const wisheditem = { img, title, price, odlPrice, rating, category, type }
wisheditem.no = item._id




wisheditem.user = user?.displayName;
wisheditem.email = user?.email;
console.log(wisheditem)
fetch(`https://n-mohammadibrahim2.vercel.app/addtowish/${user.email}`, {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify(wisheditem)

})
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if (data.acknowledged === true) {

      toast.success("Successfull added your products.Thank you!")
    
    }
  })
}



//    },
//    {
//     "id":4,
//    "img":"https://i.ibb.co/jMBjqR2/top-camera-3-removebg-preview.png",
//     "title":"Digital Camera",
//     "price":7000,
//     "odlPrice":6000,
//     "rating":5,
//     "type":"mediam",
//     "category":"camera"


//    },
// ]




const[shoting,setShot]=useState(">")
const handleChange=(e)=>{
console.log(e.target.value)
setShot(e.target.value)
}
const menu=[
    <button onClick={(e)=>hanldeCategory("mobile")} className="flex flex-row items-center cat">  <IoIosArrowForward/> Mobile Phone</button>,
    <button onClick={(e)=>hanldeCategory("tablet")} className="flex flex-row items-center cat">  <IoIosArrowForward/>  Tablet</button>,
    <button onClick={(e)=>hanldeCategory("camera")} className="flex flex-row items-center cat">  <IoIosArrowForward/>  Digital Camera</button>,
    <button onClick={(e)=>hanldeCategory("watch")} className="flex flex-row items-center cat">  <IoIosArrowForward/>  Smart Watch</button>,
    <button onClick={(e)=>hanldeCategory("headphone")} className="flex flex-row items-center">  <IoIosArrowForward/>  Head Phone</button>,
    <button onClick={(e)=>hanldeCategory("speaker")}className="flex flex-row items-center cat">  <IoIosArrowForward/>  Speaker</button>,
    <button onClick={(e)=>hanldeCategory("other")} className="flex flex-row items-center cat">  <IoIosArrowForward/> Other It Products</button>,
    <button onClick={(e)=>hanldeCategory("")} className="flex flex-row items-center cat">  <IoIosArrowForward/>  All Products</button>
]
    return(
        <div>
               <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
    </ScrollToTop>
            <Navigation main={"Home"} title={"Shop"}></Navigation>
            <div className="flex lg:flex-row flex-col px-4">
                <div className="left lg:w-[20%] w-full text-start pl-3 text-black">
                    <h1 className="text-2xl font-bold headCat">CATEGORIES</h1>
                   <div className="flex flex-col items-start my-3 font-semibold">
                  
                 {
                    menu
                 }
     </div> 
     <div className="sorting">
        <h1  className="text-xl font-bold headshot lg:my-3">Shorting</h1>
        <from className="bg-white my-3">
            <select className="bg-white font-semibold py-2 px-2 my-3"onChange={handleChange}>
                <option className="text-red-600 font-semibold" value="lth">Lower price to Higher </option>
                <option className="text-red-600 font-semibold" value="htl">Higher Price to Lower</option>
            </select>
        </from>

     </div>
                </div>
                <div className="right lg:w-[80%] w-full">
                    <div className="shopBannar w-full h-[50vh]">
                        <div className="w-1/2 lg:ml-16 ml-5 text-start py-16">  
                        <h1 className="text-black font-semibold">SALE UP TO 30% OFF</h1>
                        <h2 className="text-black text-3xl font-bold">Smartphone 12</h2>
                        <button className="text-red-600 font-semibold">Shop Now</button>

                        </div>

                      
                    </div>

                    <div className="items w-full h-auto ">
                    {shoting==="htl"?<SubShop products={products}
                  
                    handleWish={handleWish}
                    
                    handleCart={handleCart}
                    ></SubShop>:<SubShop1 products={products}
                      
                    handleWish={handleWish}
                    
                    handleCart={handleCart}>
                    </SubShop1>
                    
                    
                    }


                    </div>

                </div>
            </div>

            <h2 className="text-black font-semibold">Current page :{page.pageno+1}</h2>
        <div className="my-2 font-semibold">

     
        {
            [...Array(pages).keys()].map(number=><button
                 className={page.pageno===number? "bg-red-600 text-white px-4 py-2 mx-5":"bg-slate-200 text-red-600 px-4 py-2 mx-5"}
           onClick={()=>handlePage(number)}
           key={number}>
                {number+1}
                
                

            </button>)
        }
             </div>
        </div>
    )
}
export default Shop