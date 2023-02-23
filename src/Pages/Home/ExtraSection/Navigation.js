import React from "react";
import {IoIosArrowForward } from 'react-icons/io';
import "./Navigation.css"
const Navigation=({title,main})=>{

    return(
        <div className="py-3 w-full "> 
            <h2 className="flex felx-row font-semibold items-center text-black text-xl ml-5">{main} <IoIosArrowForward/>   <span className="text-red-600">{title}</span></h2>
        </div>
    )
}
export default Navigation