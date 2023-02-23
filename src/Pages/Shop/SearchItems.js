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
const SearchItems=()=>{

    const [items,setItems]=useState([])
   
   


const {user}=useContext(AuthContext)






    return(
        <div>
               <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
    </ScrollToTop>
            <Navigation title={"Shop"}></Navigation>
            <div className="flex lg:flex-row flex-col px-4">
                <div className="left lg:w-[20%] w-full text-start pl-3 text-black">
                    <h1 className="text-2xl font-bold headCat">CATEGORIES</h1>
                   <div className="flex flex-col items-start my-3 font-semibold">
{/*                   
                 {
                    menu
                 } */}
     </div> 
     <div className="sorting">
        <h1  className="text-xl font-bold headshot lg:my-3">Shorting</h1>
        <from className="bg-white my-3">
            <select className="bg-white font-semibold py-2 px-2 my-3">
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
                    {/* {shoting==="htl"?<SubShop products={products}
                  
                    handleWish={handleWish}
                    ></SubShop>:<SubShop1 products={products}
                       handleWish={handleWish}>

                    </SubShop1>
                    
                    
                    } */}


                    </div>

                </div>
            </div>
{/* 
            <h2 className="text-black font-semibold">Currnt page :{page.pageno+1}</h2> */}
        <div className="my-2 font-semibold">

     
        {/* {
            [...Array(pages).keys()].map(number=><button
                 className={page.pageno===number? "bg-red-600 text-white px-4 py-2 mx-5":"bg-slate-200 text-red-600 px-4 py-2 mx-5"}
           onClick={()=>handlePage(number)}
           key={number}>
                {number+1}
                
                

            </button>)
        } */}
             </div>
        </div>
    )
}
export default SearchItems;