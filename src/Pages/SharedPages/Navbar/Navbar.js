// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../../assetes/logo6.jpg"
// import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

// const Navbar = () => {
//     const{user,logout}=useContext(AuthContext)
//     const handleLogout=()=>{
//         logout()
//         .then(()=>{})
//       }
//     const menu=[
//         <li><Link to="/">Home</Link></li>,
//         <li><Link to="/blog">Blog</Link></li>,
//         <li><Link to="/catagory">Catagory</Link></li>,
        
//         <>{user?
//             <>
//              <li><Link to="/dashboard">DashBoard</Link></li> 
//              <li><Link to="/"><button onClick={handleLogout}>Log out</button></Link></li>
//             </>
//            :
//             <li><Link to="/login">Log in</Link></li> 
           
//         }
//         </>
//     ]

//     return (
//         <div>
//             <div className="navbar bg-red-400 text-black font-semibold text-[18px]">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-white  w-52">
//                            {menu}
//                         </ul>
//                     </div>
//                    <Link to="/"> <img src={logo} className="w-20 rounded-full"/> </Link>
//                     <a href="/"className="btn btn-ghost text-xl font-uppercase">BecaKena.Com</a>
                   
//                 </div>
//                 <div className="navbar-center hidden lg:flex ">
//                     <ul className="menu menu-horizontal p-0  ">
//                         {menu}
//                     </ul>
//                 </div>
//                 <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
               
//             </div>
//         </div>
//     )


// }
// export default Navbar