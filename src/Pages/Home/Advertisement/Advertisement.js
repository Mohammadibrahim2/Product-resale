import React from "react";
import ImageGallery from 'react-image-gallery';
import "./AddStyle.css";

const Advertisement=()=>{
    
  const items=[
    {
      id:1,
      img:"https://i.ibb.co/D82ZS1m/adver.webp",
   
    },
 
    {
      id:4,
      img:"https://i.ibb.co/pXS1wpg/addver2.webp",
    
    },
    {
      id:1,
      img:"https://i.ibb.co/Zfx9hPn/add80.webp",
 
    }
    
  ]

 
    return(
        <div className="w-full">
       

         
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[95%] mx-auto gap-3 ">


           
            {
              items.map(item=> <div className=" bg-white text-black h-[200px] advatiseitms">
              <div className=" text-black h-full semibox ">
                <div className="w-full h-full imgbox">
                  <img src={item.img} alt="img" className="w-full h-full  img "></img></div>
              
                </div>
              </div>)
            }
            </div>
      
        </div>
    )
}
export default Advertisement