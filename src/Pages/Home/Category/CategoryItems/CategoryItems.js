import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const CategoryItem=({category})=>{
    const {id,image,title,details,}=category

    return(
        <div>
              <div className=" w-96 h-80 bg-white shadow-xl ">
                <div className="w-full h-3/4">
                <img src={image}alt="Shoes" className="h-full w-full" />
                </div>
              
                <div className="card-body flex justify-between items-center px-5 flex-row">
                    <div className="card-actions ">
                    <h2 className="card-title text-black">
                      {title}
                    </h2>
                    
                    </div>
                    <div className="card-actions  text-4xl text-black">
                 
                 <Link to={`/category/${title}`}><HiArrowCircleRight></HiArrowCircleRight> </Link> 
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryItem