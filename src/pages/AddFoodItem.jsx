import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddFoodItem = () => {
  const { user } = useAuth();
  //  console.log(user);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const {}
    // try {
    //   const { data } = await axios.post(
    //     `${import.meta.env.vite_base_url}/addfood`,
    //     data
    //   );
    //   console.log(data);
    //   toast.success("Food item added Successfully!");
    //   // navigate('/my-posted-jobs')
    // } catch (err) {
    //   console.log(err);
    // }
    const {
      foodname,
      foodimage,
      foodcategory,
      quantity,
      price,
      country,
      email,
      addusername,
      adduseremail,
      description,
    } = data;
    // console.log(typeof price, typeof quantity);
    // Parse quantity and price to numbers
    const numericQuantity = parseFloat(quantity);
    const numericPrice = parseFloat(price);
    // const userEmail = user?.email;

    // Update data object with numeric values
    const updatedData = {
      ...data,
      email: user?.email,
      username: user?.displayName,
      quantity: numericQuantity,
      price: numericPrice,
    }; 
    fetch(`https://server-side-ass11.vercel.app/addfood`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Food Item Added",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Data didn't added",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
    reset();
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Wandering Fork | Add your Food Items</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div>
        <div className="max-w-2xl mx-auto bg-white p-16">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label
                  for="Food Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Food Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Food Name"
                  required
                  {...register("foodname", { required: true })}
                />
              </div>
              <div>
                <label
                  for="Food Image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Food Image
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Food Image Url"
                  required
                  {...register("foodimage", { required: true })}
                />
              </div>
              <div>
                <label
                  for="Food Category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Food Category
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Food Category"
                  required
                  {...register("foodcategory", { required: true })}
                />
              </div>
              <div>
                <label
                  for="Quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Quantity"
                  required
                  {...register("quantity", { required: true })}
                />
              </div>
              <div>
                <label
                  for="Price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Price"
                  required
                  {...register("price", { required: true })}
                />
              </div>
              <div>
                <label
                  for="Add By Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Add By Name:
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add By Name"
                  required
                  // {...register("addusername", { required: true })}
                  defaultValue={user?.displayName}
                  disabled
                />
              </div>
              <div>
                <label
                  for="Add By Email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Add By Email:
                </label>
                <input
                  type="email"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add By Email"
                  required
                  // {...register("adduseremail", { required: true })}
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <div>
                <label
                  for="Country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Food Origin (Country)
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Food Origin (Country)"
                  required
                  {...register("country", { required: true })}
                />
              </div>
              <div>
                <label
                  for="company"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Short Description
                </label>
                <textarea
                  type="text"
                  id="company"
                  className="textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Short Description"
                  required
                  {...register("description", { required: true })}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
