import React from "react";
import Slider from "react-slick";

const Brand=()=>{

    const items=[
        {
            id:1,
            img:"https://i.ibb.co/pQ6dg06/brand2-1-png-removebg-preview.png"
        },
        {
            id:1,
            img:"https://i.ibb.co/R9NR9j0/brand1-3-png-removebg-preview.png"
        },
        {
            id:1,
            img:"https://i.ibb.co/YDF34mR/brand5-1-png-removebg-preview.png"
        },
        {
            id:1,
            img:"https://i.ibb.co/pQ6dg06/brand2-1-png-removebg-preview.png"
        },
        {
            id:1,
            img:"https://i.ibb.co/qkZk7rc/brand1-1-png-removebg-preview.png"
        },
        {
            id:1,
            img:"https://i.ibb.co/YDF34mR/brand5-1-png-removebg-preview.png"
        },
    ]
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 5,
     
        // autoplay: true,
        autoplaySpeed: 2000,
       
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
                slidesToShow: 3,
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
return(
    <div>
        <div className="w-full px-5">
        <Slider {...settings} className=" lg:w-[95%] w-[95%] mx-auto my-5">
            {
                items.map(item=><div className="bg-white py-3 px-2  ">

                    <img src={item.img} className="h-[70px] object-contain"/>
                </div>)
            }
            </Slider>
    </div>

    </div>
)
}
export default Brand