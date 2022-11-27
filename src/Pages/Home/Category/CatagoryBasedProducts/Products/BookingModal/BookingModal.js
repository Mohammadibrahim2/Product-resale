// import React, { useContext } from "react";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";



// const BookingModal = ({ modalData,setModalData}) => {
//     const {image, id, title, location,resalePrice,originalPrice, yearsOfUse,sellerSName,postedTime }=modalData;
//         const{user}=useContext(AuthContext)
//         console.log(user)
//         console.log(modalData)
       

// const handleModalSubmit=(event)=>{
   
    
//     event.preventDefault()

//     const form=event.target;
//     const email=form.email.value;
//     const phone=form.phone.value;
//     const location=form.location.value;
//     const price=form.price.value;
//     const BookerName=form.name.value;
//     const productName=form.productName.value
  
//     const bookingInfo={
//         email,
//         phone,
//         BookerName,
//         price,
//         location,
//         productName
        
        
//     }
    
   
//     fetch('http://localhost:5000/bookings',{
//         method:"POST",
//         headers:{
//             "content-type":"application/json"
//         },
//         body:JSON.stringify(bookingInfo)
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
       
//         if(data.acknowledged===true){
//             toast.success("successfully booked your items")
//             form.reset()
           

//          }
      
//     })
    

// }

//     return (
//         <div>
//             booking modal..
//             <div className="">
                
//                 <input type="checkbox" id="Booking-modal" className="modal-toggle " />
//                 <div className="modal">
//                     <div className="modal-box relative bg-white ">
//                         <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                         <form onSubmit={handleModalSubmit} className="w-full text-center p-3 ">

//                         <input  name="productName"className="text-3xl font-semibold py-3 bg-white w-full border border-none text-center text-orange-700"defaultValue={title} disabled />

//                         <input name="name"type="name" defaultValue={user.displayName} disabled  className="input input-bordered w-full mt-2   " />
//                         <input name="email" type="email"defaultValue={user.email}  disabled className="my-3 input input-bordered w-full   " />
//                         <input type="text" name="price"defaultValue={resalePrice} disabled className="input input-bordered   w-full mt-3 mb-3 "/>
//                         <input type="text" name="location"placeholder="Meeting place"  className="input input-bordered  w-full mt-3 mb-3 "/>
//                         <input type="text"  name="phone"placeholder=" Enter Your Phone Number" className="input input-bordered w-full my-3   " />
//                         <input type="submit" value="SUBMIT"  className="btn btn-error w-full" />
//                     </form>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default BookingModal