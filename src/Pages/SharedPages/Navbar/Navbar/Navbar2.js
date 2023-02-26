import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill ,BsFillHeartFill,BsFillPersonFill ,BsSearch} from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import {MdDashboard} from "react-icons/md"
const Navbar2=()=>{
const {user}=useContext(AuthContext)
const[Sname,setName]=useState()

const handleSearch=(e)=>{
    e.preventDefault()
   
    const name=e.target.search.value;
    setName(name)
    console.log(name)
   
}

    const {itemsCount,toggle,settoggle}=useContext(AuthContext)
   
    const items=[
        
        {
            id:1,
            icon:<BsCartFill/>,
            text:"My Cart",
            subtext:` ${itemsCount}  items`,
            link:"cart"
        },
        {
            id:2,
            icon:<BsFillHeartFill/>,
            text:"Wishlist",
            subtext:"your wishlist",
            link:"wishlist"
        },
        {
            id:3,
            icon:<BsFillPersonFill/>,
            text:"My profile",
            subtext:`${user?.displayName}`,
            link:"profile"
        }
    ]
   
    return(
        <div className=" lg:py-3 py-2 px-5 w-full h-auto text-red-600 sticky  lg:relative top-[35px] lg:top-0 z-50" style={{backgroundColor:"white"}}>
            <div className="text-red-600 font-semibold w-full h-full  flex flex-row justify-between ">

                <div className="flex flex-row justify-center items-center"> <h2 className="lg:text-2xl text-xl text-black font-bold mr-5">Noakhali It Center</h2>
                <form className="lg:flex flex-row justify-center items-center hidden " onSubmit={handleSearch}>
                    <input type="text" name="search" className="  px-5 py-2 rounded-r-sm border border-white bg-black text-red-600"  placeholder="search product"/>
                   {/* <Link to={`/shop/${Sname}`}>  </Link> */}
                   <button type="submit" className=" text-red-600 px-3 py-2 border-2 text-xl " ><BsSearch style={{color:"#ED1D24"}}/></button>
                    </form>
                    </div> 
                <div className="list-none lg:flex flex-row hidden justify-around items-center w-[40%]">
                  {
                    items.map(item=><div key={item.id} className="flex flex-row justify-center items-center">
                       
                        <span className="bg-transparent  mr-2 rounded-full  py-2 px-2 text-white text-xl" style={{backgroundColor:"#ED1D24"}}>{item.icon}</span>
                        <div className="flex flex-col items-start text-black " style={{fontSize:"13px"}}>
                           <Link to={`/${item.link}`}>
                            <h2>{item.text}</h2>
                            <h2>{item.subtext}</h2></Link> 
                        </div>
                       
                    </div>)
                  }
                </div>
                <div className="lg:hidden block transition duration-500">
             
  
                   {toggle? <button  onClick={()=>settoggle(false)} className="text-2xl" title="Menu"><FiX/></button>:
                    <button onClick={()=>settoggle(true)} className="text-2xl" title="Menu"><FiAlignRight/></button>}
                      <label htmlFor="dash" className="drawer-button  " title="DashBaord"><MdDashboard/>
        </label>
                </div>
            </div>

        </div>
    )

}
export default Navbar2