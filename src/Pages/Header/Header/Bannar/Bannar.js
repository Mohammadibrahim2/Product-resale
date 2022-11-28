
import React from "react";
import BannarItem from "./BannarItem";

const Bannar=()=>{
    const bannarData=[
        {
            image:"https://www.weknowboise.com/uploads/shared/images/blog/best-boise-furniture-home-decor-stores.jpg",
            id:1,
            prev:4,
            next:2,
            title:" Welcome to our secound hand furniture site"
        },
        {
            image:"https://hatil.com/sites/default/files/styles/hatil_product_list_crop/public/Myth-184%20Bed%20HATIL%20%20modern%20bedroom%20online%20buy%20Bangladesh%20low%20price.jpg?itok=DhK5h2jb",
            id:2,
            prev:1,
            next:3, 
            title:" will help you get second hand furnitue at an affordable price"
        },
        {
            image:"https://s3.amazonaws.com/furniture.retailcatalog.us/products/425527448/large/4176-02-black-nailhead.jpg",
            id:3,
            prev:2,
            next:4,
            title:" You can also sell your used but fresh furnitures"
        },
        {
            image:"https://static-01.daraz.com.bd/p/738d3c66f54dd1eab142f926b96b3bc8.jpg",
            id:4,
            prev:3,
            next:1,
            title:" Welcome to our secound hand furniture"
        },
    ]
    return(
      
       
        <div className="carousel w-full h-[80vh]">
           {
            bannarData.map(slide=><BannarItem
            slide={slide}
            key={slide.id}
            ></BannarItem>)
           }
    
</div>
  



       
    )


}
export default Bannar