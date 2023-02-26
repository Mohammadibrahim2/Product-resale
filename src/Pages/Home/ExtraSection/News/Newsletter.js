import React from "react";
import { toast } from "react-hot-toast";
import {FaFacebookSquare,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";
import {TfiYoutube} from "react-icons/tfi"

const NewsLetter=()=>{

   const handleNews=(event)=>{
    event.preventDefault()
    console.log(event.target.email.value)
    const newsmail=event.target.email.value
    const news={email:newsmail}
   
    fetch(`https://n-mohammadibrahim2.vercel.app/addnewsmail`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(news)

    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          toast.success("Successfully send your email.Thank you!")
          event.target.reset()

    
        }
      })
  

    }

return(
    <div className="py-4 w-[95%]  mx-auto border mb-0 flex lg:flex-row flex-col justify-between h-[120px] lg:h-auto items-center lg:px-5 absolute lg:top-[-25px] top-[-40px] lg:left-[25px] left-[7px]   " style={{backgroundColor:"#ED1D24",border:"1px solid #ED1D24"}}>
        <h1 className="text-white  font-semibold">SIGNUP FOR NEWSLETTERS</h1>
        <form className="w-2/3   " onSubmit={handleNews}>
            <input placeholder="Enter your Email" type="email" name="email" className="  w-[55%]  py-2 px-3 bg-white text-black "/>
            <button className="text-white lg:ml-3  font-semibold my-4 lg:my-0 " type="submit">SUBSCRIBE</button>
        </form>
        <div className="text-white flex flex-row justify-around lg:w-[13%] w-[35%]">
            <FaFacebookSquare/>
            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
            <TfiYoutube/>
        </div>
    </div>
)

}
export default NewsLetter