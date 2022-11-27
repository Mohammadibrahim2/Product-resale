import React from "react";
import MyBookings from "../DashBoard/MyBookings/MyBookings";
import Bannar from "../Header/Header/Bannar/Bannar";
import Advertisement from "./Advertisement/Advertisement";
import Category from "./Category/Category";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home=()=>{

    return(
        <div className="my-3">
            
            <Bannar></Bannar>
            <Category></Category>
            <Advertisement></Advertisement>
            <ExtraSection></ExtraSection>
           

        </div>
    )


}
export default Home