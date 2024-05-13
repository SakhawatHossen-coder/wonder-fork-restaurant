import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const FoodUpdatePage = () => {
  const updateData = useLoaderData();
  const { user } = useAuth();
  const {
    foodname,
    foodimage,
    foodcategory,
    price,
    quantity,
    _id,

    description,
    country,
  } = updateData;
  const navigate = useNavigate();
  const location = useLocation();
  const from = "/myaddedfooditems" || "/";
  //   console.log(updateData);
  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodname = form.elements.foodname.value;
    const price = form.elements.price.value;
    const quantity = form.elements.quantity.value;
    const description = form.elements.description.value;
    const country = form.elements.country.value;
    const numericQuantity = parseFloat(quantity);
    const numericPrice = parseFloat(price);
    const formData = {
      foodname,
      price,
      quantity,
      foodimage,
      foodcategory,
      description,
      country,
    };
    const updatedData = {
      ...formData,
      quantity: numericQuantity,
      price: numericPrice,
    };

    fetch(`http://localhost:5000/addfood/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.modifiedCount > 0) {
          Swal.fire({
            title: "Food Item Updated Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate(from);
        }
      })
      .catch((error) => {
        console.error("update failed:", error);
        // Show error message to user
        Swal.fire({
          title: "Data didn't updated",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <>
      <div>AddFoodItem</div>
      <div>
        <div className="max-w-2xl mx-auto bg-white p-16">
          <form onSubmit={handleUpdateForm}>
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
                  defaultValue={foodname}
                  name="foodname"
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
                  name="foodimage"
                  defaultValue={foodimage}
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
                  name="foodcategory"
                  defaultValue={foodcategory}
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
                  name="quantity"
                  defaultValue={quantity}
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
                  name="price"
                  defaultValue={price}
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
                  name="country"
                  defaultValue={country}
                />
              </div>
              <div>
                <label
                  for="Short Description"
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
                  name="description"
                  defaultValue={description}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default FoodUpdatePage;
