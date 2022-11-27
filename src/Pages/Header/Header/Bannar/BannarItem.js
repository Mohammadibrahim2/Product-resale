import React from "react";
const BannarItem = ({ slide }) => {
    const { id, prev, next, image } = slide

    return (

        <div id={`slide${id}`} className="carousel-item relative w-full px-5">
            <div className="flex flex-row  w-full  bg-orange-50 ">

            <div className="w-3/4">
                <img src={image} className="w-full h-full" />
            </div>
            <div className="w-1/4 justify-self-center  self-center px-3">
                <h1 className="lg:text-5xl text-xl text-black font-semibold  ">Wellcome in our furniture site</h1>
            </div>

            </div>
            
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <div className="flex justify-center py-2 gap-2">
                <a href="#slide1" className="btn btn-xs bg-black text-white">1</a>
                <a href="#slide2"  className="btn btn-xs bg-black text-white">2</a>
                <a href="#slide3"  className="btn btn-xs bg-black text-white">3</a>
                <a href="#slide4" className="btn btn-xs bg-black text-white">4</a>
            </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/3">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            
        </div>

    )


}
export default BannarItem