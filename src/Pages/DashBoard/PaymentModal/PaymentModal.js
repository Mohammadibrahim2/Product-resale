import React, { useState } from "react";
const PaymentModal = ({paymentData}) => {
    const {BookerName,productName,price}=paymentData
    console.log(paymentData)
 

   


    return (
        <div>
        
            <input type="checkbox" id="Payment-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  bg-white text-center">
                    <label htmlFor="Payment-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className="w-96 flex flex-col my-5">
                        <h1 className="text-primary text-2xl font-semibold mb-5">Payment</h1>
                <input type="text" defaultValue={BookerName} placeholder="your name" className="input input-bordered w-full max-w-xs text-white " />
                <input type="text"defaultValue={productName} className="input input-bordered w-full max-w-xs my-3  text-white" />
                <input type="text" defaultValue={price} className="input input-bordered w-full max-w-xs  text-white" />
                <input type="submit" defaultValue={"Payment"} className="btn btn-primary max-w-xs my-3" />
            </form>
                </div>
            </div>

            {/*  */}
        </div>
    )
}
export default PaymentModal