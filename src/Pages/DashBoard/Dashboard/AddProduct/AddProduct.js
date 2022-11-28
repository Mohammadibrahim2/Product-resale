import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const AddProduct=()=>{
    const {user}=useContext(AuthContext)

    const handleOnsubmit=event=>{
        event.preventDefault()
        const form=event.target
        const ProductName=form.productName.value;
        const PhotoUrl=form.PhotoURL.value;
        const UserName=form.UserName.value;
        const UserEmail=form.UserEmail.value;
        const category=form.category.value;
        const Location=form.Location.value;
        const ResalePrice=form.ResalePrice.value;
        const OriginalPrice=form.OriginalPrice.value;
        const UsedYear=form.Usedyear.value;
        const date=form.Date.value
    
        const ProductDetails={
            
            category,
            email:UserEmail,
            title:ProductName,
            location:Location,
             resalePrice:ResalePrice,
             originalPrice:OriginalPrice,
             yearsOfUse:UsedYear,
            sellerSName:UserName,
            postedTime:date,
            image:PhotoUrl
            
            

            
            
           
        }
        console.log(ProductDetails)
        

        fetch("https://n-mohammadibrahim2.vercel.app/category",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ProductDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged===true){
                toast.success("successfully Add a product by seller")
            }
            form.reset()
        })
        
        
    }

return(
    <div>
        <div className="hero  w-full ">
                <div className="hero-content flex lg:flex-row-reverse  w-full">
                    
                    <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-100">
                        <form onSubmit={handleOnsubmit} className="p-10  w-full ">
                            <h1 className="text-3xl text-black font-semibold my-3">Add your product</h1>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Your Name</span>
                                </label>
                                <input type="text" name="UserName" defaultValue={user.displayName} placeholder="Name" className="input input-bordered" />
                            </div>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Product Name</span>
                                </label>
                                <input type="text" name="productName" placeholder="Name" className="input input-bordered" />
                            </div>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Location</span>
                                </label>
                                <input type="text" name="Location" placeholder="Location" className="input input-bordered" />
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text text-black">Catagory</span>
                                </label>
                                <select name="category"className="select select-bordered w-full max-w-xs">
                               
                               <option >BedRoom</option>
                               <option>Reading Room</option>
                               <option >Drawing room</option>
                           </select>
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text text-black">Original Price</span>
                                </label>
                                <input type="text" name="OriginalPrice"  className="input input-bordered" />
                                
                            </div>
                           
                            <div>
                            <label className="label">
                                    <span className="label-text text-black">Resale Price</span>
                                </label>
                                <input type="text" name="ResalePrice"  className="input input-bordered" />
                                
                            </div>
                            <div>
                            <label className="label">
                                    <span className="label-text text-black">Used Year</span>
                                </label>
                                <input type="text" name="Usedyear"  className="input input-bordered" />
                                
                            </div>
                            <input type="date" name="Date"  className="input input-bordered mt-2 w-full" />
                            
                            
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Product Photo</span>
                                </label>
                                <input type="file"name="PhotoURL" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black"> Your Email</span>
                                </label>
                                <input type="email" defaultValue={user.email} name="UserEmail" className="input input-bordered" />
                            </div>
                           
                           
                          
                            <div className="form-control mt-6">
                                <button className="btn bg-red-500 text-black">Add Product</button>
                              
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
    </div>
)

}
export default AddProduct