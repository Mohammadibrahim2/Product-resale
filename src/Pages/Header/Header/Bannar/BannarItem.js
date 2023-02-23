import React from "react";
import { useState } from "react";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannarItem.css";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
const BannarItem = () => {



    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className="border rounded-full px-2 py-3   right-3"
                style={{ position: "absolute", top: "50%", display: "block", background: "transparent", padding: "3px ", color: "#ED1D24", fontSize: "10px", border: "1px solid #ED1D24" }}
                onClick={onClick}
            >
                <span className="text-3xl "><IoIosArrowForward /></span></div>
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className="border rounded-full px-2 py-3  left-3"
                style={{ zIndex: 1, position: "absolute", top: "50%", display: "block", background: "transparent", padding: "3px", color: "#ED1D24", fontSize: "10px", border: "1px solid #ED1D24" }}
                onClick={onClick}
            ><span className="text-3xl rounded-full"><IoIosArrowBack /></span></div>
        );
    }




    const handleBox1 = () => {
        console.log("box bro..")

    }

    const handleBox2 = () => {
        console.log("broooo..")
    }

    const slides = [
        {
            id: 1,
            img: "https://i.ibb.co/s24bYDs/bannarup-3-removebg-preview.png",
            position: "back",
            backgroundd:"bg-zinc-900",
            textx:"text-white"
        },
        {
            id: 1,
            img: "https://i.ibb.co/7b3wXLF/bannarup-2.png",
            position: "front"
        },
     
        // {
        //     id: 1,
        //     img: "https://i.ibb.co/7b3wXLF/bannarup-2.png",
        //     position: "top",
           
        // },
        {
            id: 1,
            img: "https://i.ibb.co/48y1VWh/bannar-4-removebg-preview.png",
            position: "bottom"
        }
    ]


    const settings = {
        dots: true,
        //    fade:true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    return (

        <div className=" w-full lg:h-[70vh] h-[40vh]">




            <Slider {...settings} className="w-full h-full  " >



                {
                    slides.map(slide =>
                        <div className={`flex flex-row justify-between w-full px-4 py-2 ${slide.backgroundd} ${slide.textx} text-black h-full`}>

                            <div className="flex flex-row  lg:justify-around justify-between items-center  px-8 h-full">

                                <div className="text-start lg:w-1/2 w-1/2 ">
                                    <h2 className="text-sm">Electronic Offer sale</h2>
                                <div className="headText">

                              
                                    <h1 className="font-bold  lg:text-3xl text-sm">UP TO 20% OFF <br /> OLED TV</h1>
                                    <p  className="my-3 lg:text-xl text-sm">
                                        Suscipit, aut sequi qui
                                        iure quam voluptates asperiores illum iusto ?</p>
                                        </div>
                                    <Link to="/shop"><button className="py-1 px-2 lg:text-xl text-sm " style={{ backgroundColor: " #ed1d24", color: "white"}}> Shop Now</button></Link>
                                    </div> 

                                <div className="lg:w-1/2 w-1/2 h-full justify-self-end">
                                    <img src={slide.img} className="ml-8"></img>
                                </div>


                            </div>


                        </div>




                    )
                }


            </Slider>






        </div>




    )


}
export default BannarItem


{/* <h2 className="">Electronic Offer sale</h2>
<h1 style={{fontSize:"18px"}} className="font-bold headText">UP TO 20% OFF <br/> OLED TV</h1>
<p style={{fontSize:"12px"}} className="my-3"> 
   Suscipit, aut sequi qui 
 iure quam voluptates asperiores illum iusto ?</p>
 <p>{slide.position}</p>
    <button className="py-1 px-2" style={{backgroundColor:" #ed1d24",color:"white",fontSize:"13px"}}> Shop Now</button> */}