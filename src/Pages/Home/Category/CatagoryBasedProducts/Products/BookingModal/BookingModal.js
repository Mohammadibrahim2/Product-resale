import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";



const BookingModal = ({ modalData,setModalData}) => {
    const {title,price,img}=modalData;
        const{user}=useContext(AuthContext)
        console.log(user)
        console.log(modalData)
       

const handleModalSubmit=(event)=>{
   
    
    event.preventDefault()

   
    
   
//     fetch('https://n-mohammadibrahim2.vercel.app/bookings',{
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
    

}
   
const handleCart = (item) => {

    const { img, title, price, odlPrice, rating, category, type } = item
    const cartitems = { img, title, price, odlPrice, rating, category, type }
    cartitems.no = item._id

    cartitems.person = user?.displayName;
    cartitems.email = user?.email;
    console.log(cartitems)
    fetch(`https://n-mohammadibrahim2.vercel.app/addtocart/${user?.email}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(cartitems)

    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          toast.success("Successfully added your products.Thank you!")
        
        }
      })
  };

    return (
        <div>
            
            <div className="">
                
                <input type="checkbox" id="Booking-modal" className="modal-toggle " />
                <div className="modal">
                    <div className="modal-box relative bg-white ">
                        <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2  " onClick={() => setModalData(null)} >✕</label>
                        
                    <div className="flex lg:flex-row flex-col items-center justify-between px-5">
                        <img src={img} className="lg:w-1/2 w-2/3 h-1/3 lg:h-1/2"/>
                       <div className="text-black font-semibold">
                       <h1> Name: {title} </h1>
                       <h2 className="">  <span style={{color:"#ed1d24"}} >Price :  {price} Tk.   </span> </h2>
                       <button className="px-3 py-2 text-white bg-zinc-900" onClick={()=>handleCart(modalData)} style={{backgroundColor:""}}>Add to Cart</button>
                       </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BookingModal