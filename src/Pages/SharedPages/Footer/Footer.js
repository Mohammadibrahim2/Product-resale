import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../../Home/ExtraSection/News/Newsletter";

const Footer = () => {

    return (
        <div className="w-full lg:h-[70vh] text-white flex flex-col justify-end bg-zinc-900 relative mt-12 lg:mt-10" style={{ fontSize: "14px" }}>
            <NewsLetter></NewsLetter>

            <div className="flex lg:flex-row lg:justify-around  lg:items-end flex-col justify-around items-start lg:pb-5 px-4 w-[99%] mx-full mt-32 ">
                <div className="firts-f-section text-start leading-10 text-gray-300">

                    <h2 className="text-2xl font-bold font-sans text-white">CONTACT INFOMATION</h2>
                    <p>Call Us 24/7 Free</p>
                    <h2 className="text-3xl text-extrabold " style={{ color: "#e50000" }}>+88 01632846454</h2>
                    <h2>Adress: Powro bazar,Maijdee Noakhali</h2>
                    <h2>Email: noakhaliit432@gmail.com</h2>


                </div>
                {/* end first-sectiojn:- */}
                <div className="second-f-section text-gray-300">
                    <h1 className="text-xl font-semibold text-white">Information</h1>
                    <div className="list-none text-start leading-8">
                        <li>Delevary</li>
                        <li>About US</li>
                        <li>Contact US</li>
                        <li>Stores</li>
                        <li>Secure Payment</li>
                    </div>

                </div>
                {/* end second-sectiojn:- */}
                <div className="third-f-section text-gray-300">
                    <h1 className="text-xl font-semibold text-white">Custom Links</h1>
                    <div className="text-start list-none leading-8">
                       

                        <Link to="/wishlist"><li className="hover:text-red-600">Wishlist</li> </Link>
                        <Link to="/cart"><li   className="hover:text-red-600">My Cart</li> </Link>


                        <Link to="/shop"><li  className="hover:text-red-600">Shop</li></Link>
                        <Link to="/blog"><li  className="hover:text-red-600">Blog</li></Link>
                        <Link to="/contact"><li  className="hover:text-red-600">Contact Us</li></Link>
                    </div>


                </div>


                <div className="third-f-section lg:mt-0 mt-2">
                    <h1 className="text-xl font-semibold lg:text-center text-start ">Our Location</h1>
                    <img src="https://i.ibb.co/c8tV7Kt/location.webp" className="h-[170px] w-auto py-2"></img>


                </div>



            </div>

            <div className="flex lg:flex-row flex-col justify-between w-full lg:items-end items-start py-5 px-5 bg-zinc-800">
                <h2 className="lg:mb-0 mb-2  ">copyrigth by <span style={{ color: "#e50000" }}>Nokahali It center</span>,2023</h2>
                <div className="flex flex-row w-1/3">
                    <img src="https://i.ibb.co/cgbf0rT/paypay.jpg" className="w-[80px] h-[30px]"></img>
                    <img src="https://i.ibb.co/0VdCz7s/visa.png" className="w-[80px]  h-[30px] mx-3"></img>
                    <img src="https://i.ibb.co/s5rZGk6/maseter.png" className="w-[80px]  h-[30px]"></img>
                    <img src="https://i.ibb.co/Prf22ZS/paypal.jpg" className="w-[80px]  h-[30px] mx-3"></img>
                </div>
            </div>
        </div>
    )


}
export default Footer