import React from "react";
import Slider from "react-slick";
import Navigation from "../Home/ExtraSection/Navigation";
import "./Blog.css"
const Blog = () => {

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

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
     
        // autoplay: true,
        autoplaySpeed: 2000,
       
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="bg-white px-2 py-3" >
            <h1 className="text-3xl font-bold text-black my-3">FROM THE BLOG</h1>
            {/* <Navigation main={"Home"} title={"Blog"}></Navigation> */}

            <Slider {...settings} className=" w-[95%] mx-auto my-5">
                {
                    items.map(item=><div className="" >
                        <div  className="flex flex-col justify-center items-start ">
                        <div className="lg:h-[220px] lg:w-[300px] w-full h-auto bg-zinc-200 boxColor" >
                            <img src={item.img} className="h-full w-full object-fill"/>
                            <div className="textbox">
                                <h1>{item.date} - {item.author}</h1>

                            </div>
                            </div>
                            <div className="text-black font-semibold text-start px-2">
                                <h1 className="hover:text-red-600 font-bold">{item.title}</h1>
                                <p className="text-sm">{item.subtitle.slice(0,73)}</p>
                            </div>
                            </div>



                    </div>)
                }
           </Slider>




        </div>
    )
}
export default Blog