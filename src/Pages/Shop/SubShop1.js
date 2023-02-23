import React, { useContext, useState } from "react";

import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai"
import { ImLoop } from 'react-icons/im';
import { GrShop } from 'react-icons/gr';
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import BookingModal from "../Home/Category/CatagoryBasedProducts/Products/BookingModal/BookingModal";
const SubShop1 = ({ products,handleCart,handleWish}) => {
    const { user } = useContext(AuthContext)
  

    const [modalData, setModalData] = useState(null)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[99%] mx-auto">
            {products && products.sort((a, b) => (

                a.price > b.price ? 1 : -1


            )).map(item => <div className="w-full h-[360px] my-5 fullbox border " >
                <div className="h-[70%] w-[100%] mx-auto bg-slate-200  imgbox">
                    <img src={item.img} className="h-2/3 mt-5 w-full drop-shadow-xl object-contain " />
                    <div className="overlay">
                        {/* <span className="percentage self-end w-full">
                    <strong className="percentage-child "  style={{backgroundColor:"red"}}>5%</strong>
                </span> */}
                        <div className="cart-wish-quick threestu flex flex-col-reverse justify-center  ">
                            <button onClick={() => handleCart(item)} className=" text-white p-3 cart rounded-full" >  <GrShop className="" /></button>
                            <button onClick={() => handleWish(item)} className=" text-white p-3 my-5 text-xl rounded-full wish"><AiOutlineHeart /></button>
                            <label htmlFor="Booking-modal" onClick={() => setModalData(item)} className=" text-white p-3 eye rounded-full"  >   <ImLoop />  </label>


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
                        {/* <del className="">{item.odlPrice}Tk.</del> */}
                    </span>
                </div>
            </div>)
            }
        </div>

    )
}
export default SubShop1