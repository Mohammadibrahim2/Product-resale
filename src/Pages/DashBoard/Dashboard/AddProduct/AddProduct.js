
import React, { useContext } from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";



import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Navigation from "../../../Home/ExtraSection/Navigation";
import { MdAddBusiness } from "react-icons/md";

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const [data, setData] = useState()
    const [singlephoto, setPhoto] = useState({})

    const { user } = useContext(AuthContext)

    const handletask = (data) => {
        console.log(data)

        const image = data.photo[0]
        console.log(data.photo[0])

        const formData = new FormData()
        formData.append("image", image)
        const url = "https://api.imgbb.com/1/upload?expiration=600&key=acbca0356cf868436c7c6a4a4783d467"
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())


            .then(img => {
                if (img.success) {
                    console.log(img.data.url)

                    const postedPhoto = img.data.url
                    data["image"] = postedPhoto;

                    const newUpdatedata = data
                    console.log(newUpdatedata, "data update hoice")
                    setPhoto(newUpdatedata)

                    fetch("https://task-management-server-mohammadibrahim2.vercel.app/task", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(addedData => {
                            console.log(addedData)
                            if (addedData.acknowledged === true) {
                                toast.success("successfully added your data into database")
                            }
                        })


                }

            })




    }
    return (
        <div className={`  h-auto  py-3 `} >
            <Navigation title={"Add Product"} main={"DashBoard"}/>

            <form className="lg:w-1/2 md:w-1/2 w-full  py-10 px-8 mx-auto  my-3  border-2 " onSubmit={handleSubmit(handletask)} >
                <h1 className="text-xl text-start font-semibold text-black font-sans py-4 flex flex-row items-center " ><MdAddBusiness className="text-2xl" style={{ color: "#ed1d24" }} /><span className="ml-2">Add New Product</span></h1>
                <input type="text" {...register("subject", { required: "subject is requred" })} placeholder="Product Name" className="px-3 py-2 w-full border-2 text-black bg-white border-black " />
                <input type="text" {...register("subject", { required: "subject is requred" })} placeholder="subject" className="px-3 py-2 w-full border-2  text-black bg-white border-black my-2" />
                <input type="text" {...register("subject", { required: "subject is requred" })} placeholder="subject" className="px-3 py-2 w-full border-2  text-black bg-white border-black my-2" />

                <select {...register("category", { required: true })} className="w-full bg-white text-black py-2 pl-2 border-2 border-black">
                    <option value="" className="text-red-600">Mobile</option>
                    <option value="A" className="text-red-600">Tablet</option>
                    <option value="B" className="text-red-600">Speaker</option>
                    <option value="B" className="text-red-600">Smart Watch</option>
                    <option value="B" className="text-red-600">Head Phone</option>
                    <option value="B" className="text-red-600">Digital camera</option>
                    <option value="B" className="text-red-600">Other</option>
                </select>
                <input type="file" {...register("photo", { required: "file is requred" })} className=" my-2   text-white px-3 py-2 w-full border-2  " style={{ backgroundColor: "#ed1d24" }} />
                <input type="text" {...register("task", { required: "" })} placeholder="Price" className="px-3 py-2 w-full border-2 border-black bg-white my-2 text-black" />

                <input type="submit" className="px-4 py-2  text-white font-semibold w-full " style={{ backgroundColor: "#ed1d24" }} />

                <p>{data}</p>
                {errors.subject && <p className="text-red-600" role="alert">{errors.subject?.message}</p>}

            </form>





        </div>
    )

}
export default AddProduct