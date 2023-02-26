import React, { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { ImLoop } from 'react-icons/im';
import { GrShop } from 'react-icons/gr';
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { useQuery } from "@tanstack/react-query";

// import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { BsStarFill, BsFillHeartFill, BsEyeFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa'
import SubAdd from "../../Advertisement/SubAdrevtizement/AdvertizeLittle";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import BookingModal from "../../Category/CatagoryBasedProducts/Products/BookingModal/BookingModal";
import Navigation from "../Navigation";


const MobileAndTablets = () => {


  const [items, setItems] = useState([])
  const { isLoading, refetch } = useQuery({
    queryKey: ['allorders'],
    queryFn: () => fetch(`https://n-mohammadibrahim2.vercel.app/category/horizontal`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
        console.log(items)
      })



  })

  const [mobileitems, setMobileitems] = useState([])
  const { refatch } = useQuery({
    queryKey: [''],
    queryFn: () => fetch(`https://n-mohammadibrahim2.vercel.app/category/vertical`)
      .then(res => res.json())
      .then(data => {
        setMobileitems(data)
        console.log(data)
      })



  })
  const { user } = useContext(AuthContext)



  // const items=[
  //    {
  //     "id":1,
  //     "img":"https://i.ibb.co/gjgfqS1/top-mobile-9-removebg-preview.png",
  //     "title":"Mobile",
  //     "price":20000,
  //     "odlPrice":25000,
  //     "rating":2,
  //     "category":"mobile",
  //     "type":"horizontal"



  //    },
  //    {
  //     "id":2,
  //     "img":"https://i.ibb.co/FwP3HSL/top-mobile-3-removebg-preview.png",
  //     "title":"Mobile",
  //     "price":500,
  //     "odlPrice":700,
  //     "rating":3,
  //     "category":"mobile",
  //     "type":"horizontal"




  //    }
  //    ,  {
  //     "id":3,
  //     "img":"https://i.ibb.co/3pyggzT/top-tab-removebg-preview.png",
  //     "title":"Tablet",
  //     "price":2000,
  //     "odlPrice":2200,
  //     "rating":1,
  //     "category":"tablet",
  //     "type":"horizontal"




  //    },

  //    {
  //     "id":5,
  //     "img":"https://i.ibb.co/9NMdmZN/top-rab-2-removebg-preview.png",
  //     "title":"Tablet",
  //     "price":800,
  //     "odlPrice":1100,
  //     "rating":5,
  //     "category":"tablet",
  //     "type":"horizontal"




  //    },
  //    {
  //     "id":1,
  //     "img":"https://i.ibb.co/gFd2J2y/top-mobile-4-removebg-preview.png",
  //     "title":"Mobile",
  //     "price":20000,
  //     "odlPrice":25000,
  //     "rating":2,
  //     "category":"mobile",
  //     "type":"horizontal"




  //    },  ]
  //    {
  //     "id":4,
  //     "img":"https://i.ibb.co/tCR2BXz/top-mouse-removebg-preview.png",
  //     "title":"Mouse",
  //     "price":550,
  //     "odlPrice":700,
  //     "rating":2,
  //     "category":"mouse"


  //    },
  //    {
  //     "id":4,
  //     "img":"https://i.ibb.co/NNyGTRT/top-pendrive-removebg-preview.png",
  //     "title":"Pen drive",
  //     "price":450,
  //     "odlPrice":600,
  //     "rating":0,
  //     "category":"other"


  //    },
  //    {
  //     "id":4,
  //     "img":"https://i.ibb.co/Qjg82jx/top-moble-2-removebg-preview.png",
  //     "title":"Mobile",
  //     "price":13000,
  //     "odlPrice":10000,
  //     "rating":3,
  //     "category":"mobile"


  //    },
  //    {
  //     "id":4,
  //     "img":"https://i.ibb.co/jMBjqR2/top-camera-3-removebg-preview.png",
  //     "title":"Digital Camera",
  //     "price":7000,
  //     "odlPrice":6000,
  //     "rating":2,
  //     "category":"camera"


  //    },    {
  //      "id":3,
  //      "img":"https://i.ibb.co/s9qzcjY/side-tab-removebg-preview.png",
  //      "title":"Smart Watch",
  //      "price":2000,
  //      "odlPrice":2200,
  //      "rating":1,
  //      "category":"watch"


  //     },


  // const mobileitems=[

  //     {
  //         "id":5,
  //         "img":"https://i.ibb.co/6BGPgL4/side-phone-3-removebg-preview.png",
  //         "title":"Mobile",
  //         "price":800,
  //         "odlPrice":1100,
  //         "rating":5,
  //         "category":"mobile",
  //         "type":"vertical1"



  //        },
  //     {
  //      "id":1,
  //      "img":"https://i.ibb.co/DVKpCtT/side-phone-removebg-preview.png",
  //      "title":"Mobile",
  //      "price":20000,
  //      "odlPrice":25000,
  //      "rating":2,
  //      "category":"mobile",
  //      "type":"vertical1"



  //     },
  //     {
  //      "id":2,
  //      "img":"https://i.ibb.co/yWCTdmQ/side-phone-2-removebg-preview.png",
  //      "title":"Mobile",
  //      "price":500,
  //      "odlPrice":700,
  //      "rating":3,
  //      "category":"mobile",
  //      "type":"vertical1"



  //     },



  //     {
  //      "id":4,
  //      "img":"https://i.ibb.co/3CDGsG3/side-tab-2-removebg-preview.png",
  //      "title":"Tablet",
  //      "price":550,
  //      "odlPrice":700,
  //      "rating":2,
  //      "category":"tablet",
  //      "type":"vertical1",




  //     },
  //     {
  //      "id":4,
  //      "img":"https://i.ibb.co/w0h9210/tab-78-removebg-preview.png",
  //      "title":"Tablet",
  //      "price":450,
  //      "odlPrice":600,
  //      "rating":0,
  //      "category":"tablet",
  //      "type":"vertical1",




  //     }

  //  ]

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
          refetch()
        }
      })
  }
  // wish:----------
  const handleWish = (item) => {
    console.log( item)

    const { img, title, price, odlPrice, rating, category, type } = item
    const wisheditem = { img, title, price, odlPrice, rating, category, type }
    wisheditem.no = item._id


    console.log(item)


    wisheditem.user = user?.displayName;
    wisheditem.email = user?.email;
    console.log(wisheditem)
    fetch(`https://n-mohammadibrahim2.vercel.app/addtowish/${user.email}`, {
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

          toast.success("Successfully added your products.Thank you!")
          refetch()
        }
      })
  }

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="border rounded-full px-2 py-3  right-3 lg:right-0"
        style={{ position: "absolute", top: "-9%", display: "block", background: "transparent", padding: "", color: "black", fontSize: "10px", paddingBottom: "10px", border: "1px solid transparent" }}
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
        style={{ zIndex: 1, position: "absolute", top: "-9%", display: "block", background: "transparent", padding: "", color: "black", fontSize: "10px", border: "1px solid transparent" }}
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
      <h1 className=" text-black text-start lg:text-3xl text-2xl py-4 ml-4 font-semibold">Mobile  & Tablets</h1>
      <div className="flex lg:flex-row flex-col  items-start w-[99%] mx-auto  justify-center p-3">


        {/* left section:- */}
        <div className="lg:w-[76%] w-full bg-white py-3 lg:py-0">


          <Slider {...settings} className=" w-full mx-auto my-5">

            {items &&
              items.map(item => <div className="w-full h-[330px] my-5 fullbox ">
                <div className="h-2/3 w-[80%] mx-auto bg-slate-100  imgbox">
                  <img src={item.img} className="h-full w-full drop-shadow-xl object-contain " />
                  <div className="overlay">
                    <span className="percentage self-end w-full">
                      <strong className="percentage-child " style={{ backgroundColor: "#ED1D24" }}>5%</strong>
                    </span>
                    <div className="cart-wish-quick threestu flex flex-col justify-center  ">
                      <button onClick={() => handleCart(item)} className=" text-white p-3 cart rounded-full" >  <GrShop className="" />    </button>
                      <button onClick={() => handleWish(item)} className=" text-white p-3 my-5 text-xl rounded-full wish"  >    <AiOutlineHeart />    </button>
                      <label htmlFor="Booking-modal" onClick={() => setModalData(item)} className=" text-white p-3 eye rounded-full"  >   <ImLoop />  </label>


                    



                    </div>
                  </div>
                </div>
                <div className="w-full lg:pl-5 pl-10">
                  <span className="text-red-600 flex flex-row w-full justify-start items-center py-2 ">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <h2 className="text-black font-semibold text-start">{item.title}</h2>
                  <span className="text-black flex flex-col justify-start items-start py-3 font-semibold  ">
                    <span style={{ color: "#ED1D24" }}>{item.price}Tk.</span>
                    <del className="my-2" style={{ color: "" }}>{item.odlPrice}Tk.</del>
                  </span>
                </div>
              </div>)
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
                        <Link to="/shop">  <button className="text-red-600 font-semibold">Shop Now</button></Link>

                        </div>
                        </div>


        </div>
        {/* ...................left section  end:-------------------*/}
        {/*............................ right section  start:------------*/}


        <div className="lg:w-[22%] w-[99%] mx-auto bg-white lg:ml-4">
          <div className="w-full">
            <h1 className="text-xl text-start py-3 font-semibold text-black px-5">Top Rating</h1>
            {mobileitems && mobileitems.map(item => <div className="flex flex-row justify-between  px-8 lg:px-2 items-center  border  py-2">
              <div className="">
                <img src={item.img} className="w-[100px] h-[90px]" />
              </div>
              <div className="lg:mb-0 mb-8">
                <span className="flex flex-row w-full justify-center items-center " style={{ fontSize: "10px", color: "yellow" }}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
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
export default MobileAndTablets