
import { useQuery } from "@tanstack/react-query";
import React , { PureComponent, useContext, useState } from "react";

import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Navigation from "../../Home/ExtraSection/Navigation";
import PaymentModal from "../PaymentModal/PaymentModal";
import {BsCartCheckFill,BsFillSuitHeartFill } from 'react-icons/bs';
import {IoIosPersonAdd } from 'react-icons/io';
import {AiFillPieChart} from 'react-icons/ai'
import DashBoard from "./DashBoard";
import AllProducts from "../MyBookings/MyBookings";
import CircleChart from "./Statistics.js/Chart";
import BarLine from "./Statistics.js/Bar";
import UserMessage from "./UserContactInfo/UserMessage";



const DashBoardMain=()=>{
  const[paymentData,setPaymentData]=useState(null)
   
const{user}=useContext(AuthContext) 
  const items=[
    {
        id:1,
        title:"Products Sold",
        number:"850",
        icon:<BsCartCheckFill/>,
        color:"text-purple-600",
        progress:"bg-purple-600"
    },
    {
        id:3,
        title:"New Customers",
        number:"146",
        icon:<IoIosPersonAdd/>,
        color:"text-green-600",
        progress:"bg-green-600"
       
    },
 
    {
        id:4,
        title:"Customer Satisfaction",
        number:"99.89 %",
        icon:<BsFillSuitHeartFill/>,
        color:"text-rose-600",
        progress:"bg-rose-600"
    },
   
    {
        id:2,
        title:"Net Profit",
        number:"$748",
        icon:<AiFillPieChart/>,
        color:"text-cyan-600",
        progress:"bg-cyan-600"
       
    },
  
    
  ]
    return(
        <div className="bg-zinc-200">
            <Navigation title={"DashBoard"} main={"Home"}/>
         
            <div></div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 px-2">
                {
                    items.map(item=><div key={item.id} className="bg-white py-3 px-3 rounded-lg">
                    <div className="flex flex-row justify-between  w-full    rounded-lg">
                        <div className={`text-start `}>
                            <h2 className={` ${item.color} font-semibold `}>{item.number}</h2>
                            <h2 className="text-black ">{item.title}</h2>

                        </div>
                        <div>
                            <span className={`text-3xl ${item.color}`} >{item.icon}</span>
                        </div>
                        </div>
                        <div>
                            <div className="bg-zinc-300 w-full h-[8px] rounded-full relative my-2">
                            <div className={`progs ${item.progress} w-[70%] h-[8px]  absolute top-[-10] left-0 rounded-full `}></div>
                               
                                </div>
                               
                       
                        </div>

                    </div>)
                }
 
                </div>
                <div className="flex lg:flex-row flex-col justify-around items-center bg-zinc-200 ">
                    <div><h1 className="text-black my-3 text-start ml-8 font-semibold ">Sales Statistics</h1>
                    <BarLine></BarLine>
                    </div>
                      
                
                 <CircleChart></CircleChart>
                </div>
              <UserMessage></UserMessage>
        </div>
    )
}
export default DashBoardMain
