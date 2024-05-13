import React, { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";
import { Button } from "@material-tailwind/react";
import { BiPlusCircle } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
// import toast, { Toaster } from "react-hot-toast";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GallaryPage = () => {
  const { user } = useAuth();
  const [feedbackUser, setFeedbackUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/addfeedback`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackUser(data);
      });
  }, []);
  //   console.log(feedback);
  const handleUserForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.elements.photo.value;
    const feedback = form.elements.feedback.value;
    const feedbackData = {
      photo,
      feedback,
    };
    const newFeedbackData = {
      ...feedbackData,
      profile: user?.displayName,
    };
    fetch(`http://localhost:5000/addfeedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFeedbackData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("✅Your Feedback added successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("❌Your Feedback failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <div>GallaryPage</div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/59943/pexels-photo-59943.jpeg?auto=compress&cs=tinysrgb&w=600)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              A World of Flavors Awaits :// Page Name Gallery Page
            </h1>
            <p className="mb-5">
              Explore our diverse menu featuring exceptional local &
              international cuisine.
            </p>
          </div>
        </div>
      </div>
      {/* Gallery Section */}
      {/* Card */}
      {/* <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {feedbackUser?.map((feedbackUser, idx) => (
          <GalleryCard key={idx} feedbackUser={feedbackUser} />
        ))}
      </div>
      {/* </div> */}
      <div className="my-12">
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <Button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          size="lg"
          className="flex mx-auto justify-center items-center gap-3"
        >
          <BiPlusCircle size={20} />
          Add
        </Button>
        <ToastContainer />
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handleUserForm} className="space-y-5">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  defaultValue={user?.displayName}
                  disabled
                />
              </label>
              <div className="label">
                <span className="label-text">Feedback</span>
              </div>
              <textarea
                required
                className="textarea textarea-bordered h-24"
                placeholder="feedback"
                name="feedback"
              ></textarea>
              <label className="input input-bordered flex items-center gap-2">
                Image URL
                <input
                  type="text"
                  className="grow"
                  required
                  name="photo"
                  placeholder=" Image URL"
                />
              </label>
              <button
                type="submit"
                class="py-2.5 px-6 text-sm rounded-full bg-green-500 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-green-700"
              >
                Submit
              </button>
            </form>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-circle bg-red-500">X</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default GallaryPage;
