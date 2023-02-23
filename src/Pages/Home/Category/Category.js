import React from "react";
import CategoryItem from "./CategoryItems/CategoryItems";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {FaTabletAlt,FaCamera,FaMobileAlt,FaBatteryThreeQuarters} from "react-icons/fa"
import {IoWatchSharp} from "react-icons/io5"
import {BsSpeakerFill} from "react-icons/bs"
import {ImHeadphones} from "react-icons/im"
import {MdComputer} from "react-icons/md"


const Category = () => {
    const settings = {
        dots:false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        
      };
    const categoryData=[
        {
            id:1,
           icon:<FaTabletAlt/>,
            title:"Tablet",
            details:"hellow lagbe nakefurniture"
        },
        {
            id:6,
            icon:<FaCamera/>,
            title:"Camera",
            details:"hellow lagbe nakefurniture"
        },
        {
            id:2,
           icon:<IoWatchSharp/>,
            title:"Watch",
            details:"hellow lagbe nakefurniture"
        },
        {
            id:4,
           icon:<FaBatteryThreeQuarters/>,
            title:"Power Bank",
            details:"hellow lagbe nakefurniture"
        },
       
        {
            id:3,
            icon:<BsSpeakerFill/>,
            title:"Speaker",
            details:"hellow lagbe nakefurniture"
        },
        {
            id:5,
            icon:<ImHeadphones/>,
            title:"Head Phone",
            details:"power bank dami",

        },
        {
            id:7,
            icon:<FaMobileAlt/>,
            title:"Mobile ",
            details:"power bank dami",

        },
        // {
        //     id:7,
        //     icon:<MdComputer/>,
        //     title:"Computer",
        //     details:"power bank dami",

        // },
       
       
       
      
    
    ]

    return (<div className="w-full h-auto bg-white">
        <h2 className="text-start text-black  my-4 text-2xl font-semibold px-5">
            Top Category</h2>

  
            <Slider {...settings} className="w-[95%] mx-auto" >
           
          {
            categoryData.map(category=><CategoryItem
            category={category}
            key={category.id}
            
            ></CategoryItem>)
          }
          </Slider>
        </div>
    )



}
export default Category