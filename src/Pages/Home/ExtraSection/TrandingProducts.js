import React, { useContext, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./TrandingProducts.css"
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { ImLoop } from 'react-icons/im';
import { GrShop } from 'react-icons/gr';
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import BookingModal from "../Category/CatagoryBasedProducts/Products/BookingModal/BookingModal";
import Navigation from "./Navigation";

const TrandingProducts = () => {



  const [items, setItems] = useState([])
  const { refetch, loading } = useQuery({
    queryKey: ['type'],
    queryFn: () => fetch(`http://localhost:5000/category/mediam`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
        console.log(data)
      })



  })
  // img:"https://i.ibb.co/dbfQRf1/top-smartwatch-removebg-preview.png",
  // img:"https://i.ibb.co/NNyGTRT/top-pendrive-removebg-preview.png",
  // const items=[
  //    {
  //     "id":1,
  //     "img":"https://i.ibb.co/4Nt6yxP/tab-top-removebg-preview.png",
  //     "title":"Tablet",
  //     "price":20000,
  //     "odlPrice":25000,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"tablet"




  //    },
  //    {
  //     "id":2,
  //     "img":"https://i.ibb.co/r0wds3B/headphon-09-removebg-preview.png",
  //     "title":"HeadPhone",
  //     "price":500,
  //     "odlPrice":700,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"headphone"


  //    }
  //    ,  {
  //     "id":3,

  //     "img":"https://i.ibb.co/X50vx7h/watch-98-removebg-preview.png",
  //     "title":"Smart Watch",
  //     "price":2000,
  //     "odlPrice":2200,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"watch"


  //    },

  //    {
  //     "id":5,
  //     "img":"https://i.ibb.co/0KC1Xx9/ear-top-removebg-preview.png",
  //     "title":"Head Phone",
  //     "price":800,
  //     "odlPrice":1100,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"headphone"


  //    },
  //    {
  //     "id":4,
  //     "img":"https://i.ibb.co/R7hm1pJ/mouse-34-removebg-preview.png",
  //     "title":"Mouse",
  //     "price":550,
  //     "odlPrice":700,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"mouse"


  //    },
  //    {
  //     "id":4,

  //     "img":"https://i.ibb.co/b6cHknf/pendrive-3-removebg-preview.png",
  //     "title":"Pen drive",
  //     "price":450,
  //     "odlPrice":600,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"other"


  //    },
  //    {
  //     "id":4,
  //     "img":"https://i.ibb.co/3sxhxSs/mobile-33-removebg-preview.png",
  //     "title":"Mobile",
  //     "price":13000,
  //     "odlPrice":10000,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"mobile"


  const { user } = useContext(AuthContext)
  console.log(user?.displayName, user?.email
  )


  const handleWish = (id, item) => {
    console.log(id, item)

    const { img, title, price, odlPrice, rating, category, type } = item
    const wisheditem = { img, title, price, odlPrice, rating, category, type }
    wisheditem.no = item._id




    wisheditem.user = user?.displayName;
    wisheditem.email = user?.email;
    console.log(wisheditem)
    fetch(`http://localhost:5000/addtowish/${user.email}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(wisheditem)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged === true) {

          toast.success("Successfull added your products.Thank you!")
          refetch()
        }
      })
  }



  //    },
  //    {
  //     "id":4,
  //    "img":"https://i.ibb.co/jMBjqR2/top-camera-3-removebg-preview.png",
  //     "title":"Digital Camera",
  //     "price":7000,
  //     "odlPrice":6000,
  //     "rating":5,
  //     "type":"mediam",
  //     "category":"camera"


  //    },
  // ]
  //   id: 1,
  //   img: 'https://i.ibb.co/gFd2J2y/top-mobile-4-removebg-preview.png',
  //   title: 'Mobile',
  //   price: 20000,
  //   odlPrice: 25000,
  //   rating: 2,
  //   category: 'mobile',
  //   type: 'horizontal',
  //   user: 'Mohammad Tusar ',
  //   email: 'tusar6454@gmail.com'
  // }

  const handleCart = (item) => {

    const { img, title, price, odlPrice, rating, category, type } = item
    const cartitems = { img, title, price, odlPrice, rating, category, type }
    cartitems.no = item._id

    cartitems.person = user?.displayName;
    cartitems.email = user?.email;
    console.log(cartitems)
    fetch(`http://localhost:5000/addtocart/${user?.email}`, {
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
          refetch()
        }
      })
  }
  const [modalData, setModalData] = useState(null)
  return (



    <div className="bg-white h-auto my-8">
      <h1 className=" text-black text-start text-3xl pl-5 font-semibold">Tranding colection</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1  gap-5 w-[90%] mx-auto">

        {items &&
          items.map(item => <div className="w-full h-[360px] my-5 fullbox border " >
            <div className="h-[70%] w-[100%] mx-auto bg-slate-100  imgbox">
              <img src={item.img} className="h-2/3 mt-5 w-full drop-shadow-xl object-contain " />
              <div className="overlay">
                {/* <span className="percentage self-end w-full">
                                    <strong className="percentage-child "  style={{backgroundColor:"red"}}>5%</strong>
                                </span> */}
                <div className="cart-wish-quick threestu flex flex-col-reverse justify-center  ">
                  <button onClick={() => handleCart(item)} className=" text-white p-3 cart rounded-full" >  <GrShop className="" />  </button>
                  <button onClick={() => handleWish(item._id, item)} className=" text-white p-3 my-5 text-xl rounded-full wish"> <AiOutlineHeart /> </button>
                  <label htmlFor="Booking-modal"onClick={()=>setModalData(item)}  className=" text-white p-3 eye rounded-full"  >   <ImLoop />  </label>
                  
                  
                                        {modalData &&
                    <BookingModal
                      modalData={modalData}

                      setModalData={setModalData}

                    ></BookingModal>
                  }


                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start px-2">
              <span className="text-red-600 flex flex-row w-full justify-start items-center py-2">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
              <h2 className="text-black font-semibold text-start">{item.title}</h2>
              <span className="text-black flex flex-col justify-start text-start ">
                <span className="py-2 font-semibold" style={{ color: "#ED1D24" }}>{item.price} Tk.</span>
                <del className="">{item.odlPrice}Tk.</del>
              </span>
            </div>
          </div>)
        }

      </div>
      <Navigation></Navigation>


    </div>
  )

}
export default TrandingProducts