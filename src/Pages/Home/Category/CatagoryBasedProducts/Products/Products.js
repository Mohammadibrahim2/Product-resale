import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../SinglePoruct";
import BookingModal from "./BookingModal/BookingModal";

const ProductsOFCategory=()=>{
    const [modalData,setModalData]=useState(null)
    const productsData=useLoaderData()


return(
    <div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 my-10">
        {
          productsData.map((product,i)=><SingleProduct
          key={i}
          product={product}
          setModalData={setModalData}
          ></SingleProduct>)  
        }


    </div>
    {modalData && 
         <BookingModal 
         modalData={modalData}
       
         setModalData={setModalData}
         
         ></BookingModal>
        }
       

    </div>
   
)

}
export default  ProductsOFCategory