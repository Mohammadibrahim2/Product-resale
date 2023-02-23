// import React from "react";
// import {HiCheck } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const SingleProduct = ({ product ,setModalData}) => {
//     const { image, id, title, location,resalePrice,originalPrice,yearsOfUse,sellerSName,postedTime,verified
//     } = product
   

//     return (
//         <div className="w-96 h-[700px] bg-white shadow-xl ml-10 ">
//               <div className=" w-96 h-[700px] bg-white shadow-xl ">
//                 <div className="w-full h-1/2">
//                 <img src={image}alt="Shoes" className="h-full w-full" />
//                 </div>
//                 <hr></hr>
              
//                 <div className="card-body  px-5 h-1/2">
//                     <div className="card-actions text-black ">
//                     <h2 className="card-title text-black w-full text-3xl">
//                       {title}
//                     </h2>
//                     <div className="flex flex-row justify-between item-center w-3/4">
//                     <h3 className="card-title text-black w-full"> Seller's Name: {sellerSName}</h3>
//                     {verified && <HiCheck className="font-semibold text-3xl"style={{color:"blue"}}></HiCheck>  }
         

//                     </div>
                    

//                     <p className="card-title text-black w-full">Location :{location}</p>
//                     <p className="card-title text-black w-full">Posted Time: {postedTime}</p>
//                     <p className="card-title text-black w-full"> Original Price: {originalPrice} tk</p>
//                     <p className="card-title text-black w-full"> Resale Price: {resalePrice} tk</p>
//                     <p className="card-title text-black w-full">Years of use :{yearsOfUse} years</p>

                    
//                     </div>
//                     <div className="card-actions pb-3   text-black">
//                     <label htmlFor="Booking-modal" 
                   
//                     onClick={()=>setModalData(product)}
//                     className="btn btn-error w-1/2">
//                         Book Now
//                        </label>
                 
                  
                    
//                     </div>
//                 </div>
//             </div>
//         </div>
    
//     )

// }
// export default SingleProduct