import React from "react";
import Slider from "react-slick";
import Navigation from "../Home/ExtraSection/Navigation";
import "./Blog.css"
import {BsCalendar2DateFill} from "react-icons/bs";
import {HiPencilSquare} from "react-icons/hi2";
import {RiMessage2Fill} from "react-icons/ri"
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowForward } from "react-icons/io";
const Blog1 = () => {

    const items=[
    {
        id:1,
        title:"Post Format Audio Blogs",
        subtitle:"Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio lorem, non..",
        date:"21-January-2023",
        author:"Mohammad Tusar",
        comment:"3 Comments",
        img:"https://i.ibb.co/XY8Xmff/blog-3-removebg-preview.png"
    },
    {
        id:1,
        title:"Kitchen Inspired On Japanese",
        subtitle:"Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio lorem, non..",
        date:"12-February-2023",
        author:"Mohammad Ibrahim",
        comment:"3 Comments",
        img:"https://i.ibb.co/zm6jjFL/blogit-1-removebg-preview.png"
    },
    {
        id:1,
        title:"Post Format Gallery Blogs",
        subtitle:"Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio lorem, non..",
        date:"15-February-2023",
        author:"Jahid Akram",
        comment:"3 Comments",
        img:"https://i.ibb.co/K5QzZSz/blog-2-removebg-preview.png"
    },

    {
        id:1,
        title:"A Beautiful Sunday Morning",
        subtitle:"Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis ac quam at, posuere hendrerit eros. Praesent aliquam tincidunt tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum odio lorem, non...",
        date:"19-January-2023",
        author:"Mohammad Ibrahim",
        comment:"3 Comments",
        img:"https://i.ibb.co/zm6jjFL/blogit-1-removebg-preview.png"
    },
  
    ]

    const tabitems=[
        {
            id:1,
            text:"Smart Phone",
        },
        {
            id:2,
            text:"Head Phone",
        },
        {
            id:3,
            text:"Smart Watch",
        },
        {
            id:4,
            text:"Tablet",
        },
        {
            id:5,
            text:"Speaker",
        },
        {
            id:6,
            text:"Mouse",
        },
        {
            id:6,
            text:"Power Bank",
        }
    ]
  
    return (
        <div className="bg-white px-2 py-3" >
           
            <Navigation main={"Home"} title={"Blog"}></Navigation>
            <div className="flex lg:flex-row flex-col-reverse justify-between lg:px-8 px-2">
            <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
    </ScrollToTop>
    <div>
        <h1 className="text-xl text-black font-semibold text-start my-3 tag">TAGS</h1>

        <div className="grid grid-cols-2  gap-2 lg:mr-2  ">
                    {
                       tabitems.map(item=>
                       <button className="py-2 px-2  border-2 text-red-600 tabitem font-semibold" >{item.text}</button>
                        ) 
                    }
                   
                </div>

                <h1 className="text-xl text-black font-semibold text-start my-3 tag">ARCHIVES</h1>

<div className="grid grid-cols-1  gap-2 lg:mr-2  ">
            {
               items.map(item=>
               <button className="text-start   text-black hover:text-red-600 font-semibold flex flex-row items-center" > 
               <IoIosArrowForward/>{item.date}</button>
                ) 
            }
           
        </div>
                </div>
           
                <div className="grid grdi-cols-1 lg:w-[80%] w-full">


           
                {
                    items.map(item=><div className="w-full mx-auto lg:my-5 my-3" >
                        <div  className="flex flex-col justify-center items-start  ">
                        <div className="lg:h-[290px] w-full h-auto bg-zinc-200 boxColor" >
                            <img src={item.img} className="h-full w-full object-fill"/>
                            
                            </div>
                            <h1 className="hover:text-red-600 font-bold text-black text-2xl mt-2">{item.title}</h1>
                            <div className=" flex lg:flex-row flex-col items-start text-black font-semibold my-3"  >
                               <h1 className="flex flex-row items-center ">  <span style={{color:"#ed1d24" ,marginRight:"5px"}}><BsCalendar2DateFill/></span> {item.date} </h1>
                               <h2  className="flex flex-row items-center lg:mx-3 ">  <span style={{color:"#ed1d24"  ,marginRight:"5px"}}><HiPencilSquare/></span>{item.author}</h2>
                              <h2 className="flex flex-row items-center " >  <span style={{color:"#ed1d24"  ,marginRight:"5px"}}><RiMessage2Fill/></span> {item.comment}</h2>

                            </div>
                            <div className="text-black  text-start mb-3">
                                
                                <p className="text-sm">{item.subtitle}</p>
                            </div>
                            </div>



                    </div>)
                }
        

        </div>
            </div>




        </div>
    )
}
export default Blog1