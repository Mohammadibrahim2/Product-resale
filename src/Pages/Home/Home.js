import React from "react";
import Blog from "../Blog/Blog";
import Brand from "../Brand/Brand";

import Bannar from "../Header/Header/Bannar/Bannar";
import BannarItem from "../Header/Header/Bannar/BannarItem";
import SubHeader from "../Header/Header/SubHeader/SubHeader";
import Navbar1 from "../SharedPages/Navbar/Navbar/Navbar1";
import Navbar2 from "../SharedPages/Navbar/Navbar/Navbar2";
import Advertisement from "./Advertisement/Advertisement";
import SubAdd from "./Advertisement/SubAdrevtizement/AdvertizeLittle";
import Category from "./Category/Category";
import MobileAndTablets from "./ExtraSection/MobileAndTablets/MobileAndTablets";
import NewsLetter from "./ExtraSection/News/Newsletter";
import OtherElectronics from "./ExtraSection/OtherIt/OtherElectronics";

import TrandingProducts from "./ExtraSection/TrandingProducts";

const Home=()=>{

    return(
        <div className="my-3 ">
           
            {/* <Bannar></Bannar> */}
            <BannarItem></BannarItem>
            <SubHeader></SubHeader>
            <Advertisement></Advertisement>
            
            <Category></Category>
            <MobileAndTablets></MobileAndTablets>
            <SubAdd></SubAdd>
           
            <TrandingProducts></TrandingProducts>
            <OtherElectronics></OtherElectronics>
            <Blog></Blog>
            <Brand></Brand>
           

        </div>
    )


}
export default Home