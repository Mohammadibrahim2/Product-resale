import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { BsCartFill ,BsFillHeartFill,BsFillPersonFill ,BsSearch} from 'react-icons/bs';

import "./Navbar.css"
const Navbar3=()=>{

       
    const {user,logout,itemsCount,toggle,settoggle}=useContext(AuthContext);
 
    const handleLogout=()=>{
        logout()
        .then(()=>{})
      }
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
           subtext:"My profile",
            text:`${user?.displayName}`,
            link:"profile"
        }
    ]
   
    const navItems=[
        <Link to="/"><li onClick={()=>settoggle(false)}>Home</li></Link>,
        <Link to="/shop"><li onClick={()=>settoggle(false)}>Shop</li></Link>,
        <Link to="/blog"><li onClick={()=>settoggle(false)}>Blog</li></Link>,
        <Link to="/contact"><li onClick={()=>settoggle(false)}>Contact Us</li></Link>,
       
        <>{user?
                        <>
                         <li onClick={()=>settoggle(false)}><Link to="/dashboard">DashBoard</Link></li> 
                         <li onClick={()=>settoggle(false)}> <Link to="/"><button onClick={handleLogout} >Log out</button></Link></li>
                        </>
                       :
                       <Link to="/login"><li onClick={()=>settoggle(false)}>Log in</li></Link>
                       
                    }
                    </>
    ]
    
    return(
        <div className=" sticky  lg:relative top-[75px] lg:top-0 z-50   ">

<div className=" ">
        <div className={` py-4 px-5 drop-shadow-md border border-t-gray-200 w-full h-auto  lg:hidden block lg:relative absolute top-0 ${toggle ?"left-0": "left-[-600px]"} z-40  navbar3 w-2/3 `} style={{backgroundColor:"#ed1d24 "}}>
            <div className=" w-full h-full  flex lg:flex-row-reverse flex-col justify-between font-medium"style={{fontSize:"14px",color:"#ffffff"} }>
                <div className="hidden lg:block"> Hotline :01632846454</div>
                <div className="list-none flex lg:flex-row flex-col justify-between lg:items-center items-start  lg:w-[40%] w-full  h-[35vh] lg:h-auto">
                    {navItems}
                </div>
                <div className="list-none flex flex-col lg:hidden justify-start items-start w-full">
                  {
                    items.map(item=><div key={item.id} className="flex flex-row justify-center items-center my-2">
                       
                        <span className="bg-transparent  p-2  rounded-full  text-white text-xl" style={{backgroundColor:"#ffffff",color:"#ED1D24"}}>{item.icon}</span>
                        <div className="flex flex-col items-start justify-center text-white ml-3" style={{fontSize:"13px"}}>
                           <Link to={`/${item.link}`}>
                            <h2>{item.text}</h2>
                           
                       
                            </Link> 
                        </div>
                       
                    </div>)
                  }
                </div>
            </div>

        </div>

        </div>

        {/* for mobile:-  */}



    

        <div className={` py-4 px-5 drop-shadow-md border border-t-gray-200 w-full h-auto lg:block hidden  z-40  navbar3`} style={{backgroundColor:"#ED1D24 "}}>
            <div className="text-white w-full h-full  flex lg:flex-row-reverse flex-col justify-between font-medium"style={{fontSize:"14px"}}>
                <div className="hidden lg:block"> Hotline :01632846454</div>
                <div className="list-none flex lg:flex-row flex-col justify-between lg:items-center items-start  lg:w-[40%] w-full  h-[35vh] lg:h-auto">
                    {navItems}
                </div>
                <div className="list-none flex flex-col lg:hidden justify-start items-start w-full">
                  {
                    items.map(item=><div key={item.id} className="flex flex-row justify-center items-center my-2">
                       
                        <span className="bg-transparent    text-white text-xl" style={{backgroundColor:"#ED1D24",paddingRight:"3px"}}>{item.icon}</span>
                        <div className="flex flex-col items-start justify-center text-white " style={{fontSize:"13px"}}>
                           <Link to={`/${item.link}`}>
                            <h2>{item.text}</h2>
                       
                            </Link> 
                        </div>
                       
                    </div>)
                  }
                </div>
            </div>

        </div>



        </div>
    )

}
export default Navbar3