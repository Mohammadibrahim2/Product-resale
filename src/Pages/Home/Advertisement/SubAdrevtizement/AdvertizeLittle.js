import React from "react";
import "./Subadd.css";
import {BiBluetooth,BiBattery } from 'react-icons/bi';
import {HiWifi } from 'react-icons/hi';
import {GoUnmute } from 'react-icons/go';
const SubAdd = () => {
 const items=[
    {
        id:1,
        icon:<BiBluetooth/>,
        title:"Bluetooth",
        subtitle:"Enabled device"
    },
    {
        id:2,
        icon:<HiWifi/>,
        title:"Wireless",
        subtitle:"Connections"
    },
    {
        id:3,
        icon:<BiBattery/>,
        title:"Rechargeable",
        subtitle:"Battery"
    },
    {

        id:4,
        icon:<GoUnmute/>,
        title:"Surround Sound",
        subtitle:"System"
    }
 ]
    return (
        <div className=" w-full lg:h-[80vh] h-auto bg-white  flex lg:flex-row flex-col-reverse  justify-around items-center px-5 ">
            <div className="lg:w-1/2 w-full lg:mt-0 mt-16 lg:mb-0 mb-4 ">
                <h2 className="font-bold lg:text-5xl text-3xl text-black text-start" >DOLBY ATMOS<br/>
                    SOUND FEATURE</h2>
                    <p className="text-sm text-black text-start my-5">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
  <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
    {items.map(item=><div className="ml-5 lg:ml-0">

    <span className="text-white lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] rounded-full lg:p-5 p-3 lg:text-3xl text-2xl flex flex-row items-center justify-center "
    style={{backgroundColor:"rgb(229, 0, 0)"}}>{item.icon}</span>

<h2 className="text-black font-semibold text-start">{item.title}</h2>
    <h2 className="text-black font-semibold  text-start">{item.subtitle}</h2>



    </div>

)}
  </div>
  
            </div>
            <div>
                <div className="rounded-full lg:w-[250px] w-[180px] h-[180px] lg:h-[250px]  relative lg:mb-0 " style={{backgroundColor:"rgb(229, 0, 0)"}}>

            
                <img src="https://i.ibb.co/ZXGpVqT/earphone.webp" className="absolute top-[-10%] lg:w-[300px] lg:h-[300px] w-[250px] h-[250px]"/>
                </div>

            </div>
        </div>
    )
}
export default SubAdd