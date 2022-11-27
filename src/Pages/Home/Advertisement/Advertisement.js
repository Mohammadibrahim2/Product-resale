import React from "react";
import ImageGallery from 'react-image-gallery';

const Advertisement=()=>{
    
    return(
        <div className="w-full">
            <h1>Advertisement</h1>
            <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
    <div>product Name</div>
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
  </div>
</div>

        </div>
    )
}
export default Advertisement