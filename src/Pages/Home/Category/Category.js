import React from "react";
import CategoryItem from "./CategoryItems/CategoryItems";

const Category = () => {
    const categoryData=[
        {
            category:1,
            image:"http://cdn.home-designing.com/wp-content/uploads/2018/08/modern-platform-bedroom-sets.jpg",
            title:"BedRoom",
            details:"hellow lagbe nakefurniture"
        },
        {
            id:2,
            image:"https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/reading-table.jpg",
            title:"Reading Room",
            details:"hellow lagbe nakefurniture"
        },
        {
            id:3,
            image:"https://www.ikea.com/images/jaettebo-series-4aeab9d3b5d5c17920756c715aba35ce.jpg?f=s",
            title:"Drawing room",
            details:"hellow lagbe nakefurniture"
        }
    ]

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 px-10 gap-5">
           
          {
            categoryData.map(category=><CategoryItem
            category={category}
            key={category.id}
            
            ></CategoryItem>)
          }
        </div>
    )



}
export default Category