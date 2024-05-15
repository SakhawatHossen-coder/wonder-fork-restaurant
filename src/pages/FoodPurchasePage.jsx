import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
const FoodPurchasePage = () => {
  const { user } = useAuth();
  const currentDate = new Date();
  const [count,setCount]=useState(0)
const handleCount=()=>{
setCount(count+1)
}
  const formattedDateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = currentDate.toLocaleDateString(
    "en-US",
    formattedDateOptions
  );
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();
  const purchasefood = useLoaderData();
  // console.log(purchasefood);
  const {
    foodname,
    quantity,
    price,
    foodimage,
    email,
    username,
    adduseremail,
  } = purchasefood;
  const navigate = useNavigate();
  const from = "/allfoodpage" || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodname = form.elements.foodname.value;
    const price = form.elements.price.value;
    const quantity = form.elements.quantity.value;
    const buyeremail = form.elements.buyeremail.value;
    const buyername = form.elements.buyername.value;
    const date = form.elements.date.value;
    const numericQuantity = parseFloat(quantity);
    const numericPrice = parseFloat(price);
    console.log(foodimage, username);
    const formData = {
      foodname,
      price,
      quantity,
      buyeremail,
      buyername,
      date,
      foodimage,
      username,
      count,
    };
    const updatedData = {
      ...formData,
      quantity: numericQuantity,
      price: numericPrice,
    };
    //     console.log("Purchase data:", updatedData); // For debugging

    // Implement logic to send purchase data to your backend API
    fetch("http://localhost:5000/purchasefood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle successful purchase response
        //    console.log("Purchase successful:", responseData);
        // Show success message to user (e.g., using toast or alerts)
        if (numericQuantity <= 0) {
          return toast.error("item is not available");
        }
        if (responseData.insertedId) {
          Swal.fire({
            title: "Successfully Order Done",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate(from);
        }
      })
      .catch((error) => {
        console.error("Purchase failed:", error);
        // Show error message to user
        Swal.fire({
          title: "Order has not placed",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-16">
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                for="Food Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Food Name
              </label>
              <input
                name="foodname"
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Food Name"
                required
                //  {...register("foodname", { required: true })}
                defaultValue={foodname}
              />
            </div>
            <div>
              <label
                for="Food Price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Food Price
              </label>
              <input
                type="number"
                name="price"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Food Name"
                required
                //  {...register("price", { required: true })}
                defaultValue={price}
              />
            </div>
            <div>
              <label
                for="Food Quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Food Quantity
              </label>
              <input
                name="quantity"
                type="number"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Food Name"
                required
                //  {...register("quantity", { required: true })}
                defaultValue={quantity}
              />
            </div>
            <div>
              <label
                for="Buyer Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Buyer Name
              </label>
              <input
                name="buyername"
                type="text"
                id=" Buyer Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buyer Name"
                required
                defaultValue={user?.displayName}
                //  {...register("buyername", { required: true })}
                disabled
              />
            </div>
            <div>
              <label
                for="Buyer Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Buyer Email
              </label>
              <input
                type="email"
                name="buyeremail"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buyer Name"
                required
                defaultValue={user?.email}
                //  {...register("buyeremail", { required: true })}
                disabled
              />
            </div>
            <div>
              <label
                for="Date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Date
              </label>
              <input
                type="text"
                id="first_name"
                name="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Date"
                required
                defaultValue={formattedDate}
                //  {...register("buyingdate", { required: true })}
              />
            </div>
          </div>
          <button
          onclick={handleCount}
            type="submit"
            className="font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Purchase
          </button>
        </form>
      </div>
    </>
  );
};

export default FoodPurchasePage;
