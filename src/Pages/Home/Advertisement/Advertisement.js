import React from "react";
import ImageGallery from 'react-image-gallery';

const Advertisement=()=>{
    
    return(
        <div className="w-full">
            <h1 className="text-3xl text-black mb-3">Advertisement</h1>
            <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src="https://5.imimg.com/data5/LI/WC/MY-48861015/second-hand-dining-table-500x500.jpg" className="rounded-box w-64" />
  </div> 
  <div className="carousel-item">
    <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-04/cbh-359.jpg" className="rounded-box w-64" />
  </div> 
  <div className="carousel-item">
    <img src="https://media.karousell.com/media/photos/products/2020/10/11/second_hand_single_bed_frame_a_1602388984_76ec6a70.jpg" className="rounded-box w-64" />
  </div> 
  <div className="carousel-item">
    <img src="https://usedfurnitures.in/timthumb.php?src=images/products/2190-soild-wood-study-table.JPG&h=350" className="rounded-box w-64" />
    
  </div> 
  <div className="carousel-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigCoRy17hZRxxfpmnYD189g35NvZiY-P343N84JbLL2hB__U3h2MvcWd2F3Jh5P99T2w&usqp=CAU" className="rounded-box w-40" />
  </div> 
   
  <div className="carousel-item">
    <img src="https://5.imimg.com/data5/LI/WC/MY-48861015/second-hand-dining-table-500x500.jpg" className="rounded-box w-40" />
  </div>
</div>

        </div>
    )
}
export default Advertisement