import React, { useContext, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { ImLoop } from 'react-icons/im';
import { GrShop } from 'react-icons/gr';
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { useQuery } from "@tanstack/react-query";

import { InfinitySpin } from 'react-loader-spinner'


import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import BookingModal from "../../Category/CatagoryBasedProducts/Products/BookingModal/BookingModal";
import { toast } from "react-hot-toast";


const OtherElectronics = () => {

  const { user } = useContext(AuthContext)
  console.log(user?.displayName, user?.email
  )


  const [mobileItems, setMobileitems] = useState([])




  const { refatch, } = useQuery({
    queryKey: ['typee'],
    queryFn: () => fetch(`http://localhost:5000/category/otherVertical`)
      .then(res => res.json())
      .then(data => {
        setMobileitems(data)
        console.log(data)
      })



  })
  const [otheritems, setOtherItems] = useState([])



  const { data, loading } = useQuery({
    queryKey: ['typea'],
    queryFn: () => fetch('http://localhost:5000/category/otherHorizontal')
      .then(res => res.json())
      .then(data => {
        setOtherItems(data)
        console.log(data)
      })



  })
  console.log(otheritems)


  
  const handleWish = (item) => {
    console.log( item)

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
        
        }
      })
  }





  const handleCart = (item) => {
    console.log(item)

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
        
        }
      })
  }

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="border rounded-full px-2 py-3  right-3 lg:right-0"
        style={{ position: "absolute", top: "-9%", display: "block", background: "transparent", padding: "", color: "red", fontSize: "10px", paddingBottom: "10px", border: "1px solid transparent" }}
        onClick={onClick}
      >
        <span className="text-3xl "><IoIosArrowForward /></span></div>
    );
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="border rounded-full px-2 py-3 left-[75%] lg:left-[90%]"
        style={{ zIndex: 1, position: "absolute", top: "-9%", display: "block", background: "transparent", padding: "", color: "red", fontSize: "10px", border: "1px solid transparent" }}
        onClick={onClick}
      ><span className="text-3xl rounded-full"><IoIosArrowBack /></span></div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,

    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [modalData, setModalData] = useState(null)
  return (



    <div className="bg-slate-100 h-auto my-8">
      <h1 className=" text-black text-start text-3xl py-4 px-5 my-5">Mobile  & Tablets</h1>
      <div className="flex lg:flex-row flex-col  items-start w-[99%] mx-auto  justify-center p-3">


        {/* left section:- */}
        <div className="lg:w-[76%] w-full bg-white py-3 lg:py-0">


          <Slider {...settings} className=" w-full mx-auto my-5">

            {otheritems ? otheritems.map(item => <div key={item._id} className="w-full h-[330px] my-5 fullbox border">
              <div className="h-2/3 w-[95%] mx-auto bg-slate-100  imgbox">
                <img src={item.img} className="h-full w-full drop-shadow-xl object-contain " />
                <div className="overlay">
                  <span className="percentage self-end w-full">
                    <strong className="percentage-child " style={{ backgroundColor: "red" }}>5%</strong>
                  </span>
                  <div className="cart-wish-quick threestu flex flex-col-reverse justify-center  ">
                    <button onClick={() => handleCart( item)} className=" text-white p-3 cart rounded-full" >  <GrShop className="" />    </button>
                    <button onClick={() => handleWish( item)} className=" text-white p-3 my-5 text-xl rounded-full wish"  >    <AiOutlineHeart />    </button>
                    <label htmlFor="Booking-modal" onClick={() => setModalData(item)} className=" text-white p-3 eye rounded-full"  >   <ImLoop />  </label>





                  </div>
                </div>
              </div>
              <div className="w-full px-2">
                <span className="text-red-600 flex flex-row w-full justify-start items-center py-2">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </span>
                <h2 className="text-black font-semibold text-start">{item.title}</h2>
                <span className="text-black flex flex-col justify-start items-start ">
                  <span className="font-semibold" style={{ color: "#ed1d24" }}>{item.price}Tk.</span>
                  <del className="" style={{ color: "#ED1D24 " }}>{item.odlPrice}Tk.</del>
                </span>
              </div>
            </div>) : <InfinitySpin
              width='200'
              color="red"
            />
            }

          </Slider>

          {modalData &&
            <BookingModal
              modalData={modalData}

              setModalData={setModalData}

            ></BookingModal>
          }
<div className="shopBannar w-full h-[40vh]">
                        <div className="w-1/2 lg:ml-16 ml-5 text-start py-16">  
                        <h1 className="text-black font-semibold">SALE UP TO 30% OFF</h1>
                        <h2 className="text-black text-3xl font-bold">Smartphone 12</h2>
                        <button className="text-red-600 font-semibold">Shop Now</button>

                        </div>
                        </div>

        </div>
        {/* ...................left section  end:-------------------*/}
        {/*............................ right section  start:------------*/}


        <div className="lg:w-[22%] w-[99%] mx-auto bg-white lg:ml-4">
          <div className="w-full">
            <h1 className="text-xl text-start py-3 font-semibold text-black px-5">Top Rating</h1>
            {mobileItems && mobileItems.map(item => <div className="flex flex-row justify-between  px-8 lg:px-2 items-center  border  py-2">
              <div className="">
                <img src={item.img} className="w-[100px] h-[90px]" />
              </div>
              <div>
                <span className="flex flex-row w-full justify-center items-center " style={{ fontSize: "10px", color: "yellow" }}>

                  <span style={{ fontSize: "10px", color: 'black' }}>({item.rating})</span>
                </span>
                <h2 className="font-semibold text-blue-900" style={{ fontSize: "14px" }}>{item.title}</h2>
                <h2 className="font-semibold" style={{ fontSize: "13px", color: "red" }}>{item.price} Tk.</h2>
                <del className="text-black" style={{ fontSize: "13px" }}>{item.odlPrice} Tk.</del>
              </div>



            </div>)
            }

          </div>





        </div>
        {/*.................... right section:- --------------------------------*/}
      </div>

    </div>
  )

}
export default OtherElectronics