import React from "react";
import {MdOutlineComputer } from "react-icons/md";
import { Link } from "react-router-dom";
const CategoryItem = ({ category }) => {

    const { id, icon, title, details, } = category


    return (
        <div>
            <div className=" lg:w-[270px] lg:h-[270px] w-[180px] h-[180px] bg-white  ">

                <div className="h-2/3 w-2/3  rounded-full  lg:border-[25px] border-[20px] hover:border-zinc-200 flex flex-row justify-center items-center border-zinc-900" style={{color:"#ed1d24"}}>

             
                        <span className="p-2 lg:text-5xl  text-4xl">
                    
                        {icon}
                            </span>
                            </div>
                   

                
           

                <div className=" flex justify-between items-start px-5 flex-col my-3 pb-2">

                    <div className="card-title text-black">

                        <Link to={`/category/${id}`} className="flex flex-row justify-center items-center">    {title} </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryItem