
// import { useQuery } from "@tanstack/react-query";
// import React , { useContext, useState } from "react";

// import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
// import PaymentModal from "../PaymentModal/PaymentModal";
// const MyBookings=()=>{
//   const[paymentData,setPaymentData]=useState(null)
   
// const{user}=useContext(AuthContext)



// const url=`http://localhost:5000/bookings?email=${user.email}`

// const {data:bookings = [] }=useQuery ({
//     queryKey:["bookings",user?.email],
//     queryFn:async()=>{
//         const res = await fetch(url,{
//             headers:{
//                 authorization: `bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//         const data=await res.json();
//         return data
//     }
// })

    
  
//     return(
//         <div>
//             <div> <h2 className="text-3xl bg-white text-black">My bookings</h2></div>
//             <div className="overflow-x-auto text-xl ">
//   <table className="table text-black w-full  ">
//     <thead className="bg-red-10 ">
//       <tr className="">
//         <th className=" text-xl bg-orange-100">Image</th> 
//         <th className=" text-xl bg-orange-100">Tittle</th> 
//         <th className=" text-xl bg-orange-100">price</th> 
//         <th className=" text-xl bg-orange-100">Payment</th>
       
//       </tr>
//     </thead> 
   
//     <tbody className="mt-5 text-left text-white">
    


// {
//     bookings.map((booking,i)=><tr 
//     key={i}
//     className="py-5">
      
//     <th></th> 
    
    
   
//     <th>{booking.productName}</th>
//     <th>{booking.price}</th> 
    
//     {/* onClick={ ()=>handlePayment(booking._id)} */}
//     {/* <label htmlFor="Payment-Modal" className="btn btn-primary">Pay</label> */}
//     <th><label htmlFor="Payment-Modal" className="btn btn-primary" onClick={()=>setPaymentData(booking)}>Pay</label></th> 
   
//   </tr>)
// }

// </tbody> 
// {paymentData&&
//   <PaymentModal
//   paymentData={paymentData}


// ></PaymentModal>
// }


    
//     </table>
//   </div>
//         </div>
//     )
// }
// export default MyBookings
