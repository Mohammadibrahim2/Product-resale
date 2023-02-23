import React, { useContext, useRef } from "react";

import {BsFillTelephoneFill } from 'react-icons/bs';
import {ImLocation2} from 'react-icons/im';
import {RiSendPlaneFill} from 'react-icons/ri';
import ScrollToTop from "react-scroll-to-top";
import Navigation from "../Home/ExtraSection/Navigation";
import ContactHeader from "./ContactHeader.";
import MyComponent from "./MyMapLocation";
// import MyMapLocation from "./MyMapLocation";
// import { motion, useScroll } from "framer-motion"
// import { DarkMood } from "../DarkMood/DarkMood";

import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
// import { toast } from "react-toastify";

const Contact = () => {
   
    const contactInfo=[
        {
            icon:<RiSendPlaneFill/>,
            title:"ADDRESS",
            subtitle:" Powro bazar,Maijdee Noakhali"
        },
        {
            icon:<ImLocation2/>,
            title:"PHONE",
            subtitle:"+88 01632846454"
        },
        {
            icon:<BsFillTelephoneFill/>,
            title:"EMAIL",
            subtitle:"noakhaliit432@gmail.com"
        },
        {
            icon:<BsFillTelephoneFill/>,
            title:"OPENING TIME",
            subtitle:"8:00Am - 10:00Pm, Sunday Close"
        }
    ]

    const form = useRef();
    const handleEmail=(event)=>{
        console.log(event.target.name.value)
        event.preventDefault()
        
    // emailjs.sendForm('gmail', 'template_iehp8qs', event.target, 'lbfPLwnf1YcRH3-Ac')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    toast.success("eamil is successfully send")
    const name=event.target.name.value;
    const email=event.target.email.value;
    const subject=event.target.subject.value;
    const message=event.target.message.value;
    const date = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const mons = ["January","February","March","April","May","Jun","July","August","Septembar","October","November","December"];
       let hour=date.getHours();
       //seting Am/pm
       let po="null"
       if(hour>12){
         po="P.M"
       }
       else{
         po="A.M"
       }
//seting hour
       if(hour>12){
        hour=hour-12
       }
       else{
        hour=hour
       }
       const min=date.getMinutes();
    
       
       let day = days[date.getDay()];
       let mon = mons[date.getMonth()];
       const postDate={hour,min ,day,po,mon}

    const inbox ={name,email,subject,message,postDate }
    console.log(inbox)

   
    event.target.reset()

 
    fetch(`https://n-mohammadibrahim2.vercel.app/addmessage/${email}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(inbox)

    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          toast.success("Successfully send your mail.Thank you!")
    
        }
      })

    

    }
 
    return (
         <div className={` h-auto w-full py-5 bg-zinc-200`}>
            {/* <Navigation title="Contact"></Navigation> */}
            <ContactHeader></ContactHeader>
            <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
            </ScrollToTop>
            <h1 className={`text-start px-8 py-5  text-2xl font-semibold text-black `}>Get In Touch</h1>
            <div className="flex lg:flex-row flex-col justify-between items-start">

        
            <form  ref={form} onSubmit={handleEmail}  className={`lg:w-2/3 w-full flex flex-col  "} lg:px-5 px-2 `}>
                <div className="w-full  flex lg:flex-row flex-col justify-between my-5 ">

                <input type="name" name="name"  className={` py-2 px-3  border bg-white text-black lg:w-1/2 w-full `} placeholder="Name*" ></input>
                    <input type="email" name="email" className={` py-2 px-3  border  bg-white  text-black lg:w-1/2 lg:mx-3 w-full my-2 lg:my-0`} placeholder="Email*" ></input>
                    <input type="subject" name="subject"  className={` py-2 px-3  border bg-white  text-black lg:w-1/2 w-full  `} placeholder="Subject*" ></input>
                </div>
                <textarea name="message" className={` p-3 bg-white text-black`} placeholder="Your message*" rows="8" cols="10" ></textarea>
                <button className={` px-8 py-2 w-[150px] my-4 font-semibold `} type="submit" style={{backgroundColor:"#ed1d24",color:"white"}}  >Send </button>

            </form>
            <div className={`contactInfo grid lg:grid-cols-1 gap-3 px-5 lg:mx-auto    rounded-lg `} >
                {
                   contactInfo.map(conInfo=><div className="p-2 pl-0 flex flex-col items-start justify-around text-black border-b-2 border-b-zinc-500">
                        {/* <h2 className={` font-semibold  text-start text-black `} style={{color:`#ed1d24`}}>{conInfo.icon}</h2> */}
                        <h1 className=" my-2 font-bold">{conInfo.title}</h1>
                        <h2 className={`text-zinc-700 text-sm`}>{conInfo.subtitle}</h2>
                    </div>)
                }

            </div>
            </div>
            <div className="locationMap h-[75vh] w-full py-5 mb-16" >
                <MyComponent></MyComponent>

            </div>
        </div>
    )

}
export default Contact