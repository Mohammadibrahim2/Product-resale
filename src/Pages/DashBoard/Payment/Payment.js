import React from "react";
const Payment=()=>{

    return(

        <div className="w-full flex flex-col justify-center items-center h-full">
            <h1 className="text-3xl text-orange-500">Payment</h1>
            
        <form className="w-96 flex flex-col my-5">
        <input type="text"  className="input input-bordered w-full max-w-xs " />
        <input type="text"  className="input input-bordered w-full max-w-xs my-3" />
        <input type="text"  className="input input-bordered w-full max-w-xs" />
        <input type="submit" defaultValue={"Payment"} className="btn btn-primary max-w-xs my-3" />
        </form>

        
          
            
            
            
            </div>
    )
}
export default Payment