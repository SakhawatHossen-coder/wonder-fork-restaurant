import React, { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";
import { Button, button } from "@material-tailwind/react";
import { BiPlusCircle } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from "react-router-dom";

const GallaryPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [feedbackUser, setFeedbackUser] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/addfeedback`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackUser(data);
      });
  }, [feedbackUser]);
  //   console.log(feedback);
  const handleNav = () => {
    navigate("/login");
  };
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
    fetch(`${import.meta.env.VITE_BASE_URL}/addfeedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFeedbackData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Wandering Fork | Gallery</title>
        <link rel="canonical" href="" />
      </Helmet>
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
              The Wandering Folk | Gallery
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {feedbackUser?.map((feedbackUser, idx) => (
          <GalleryCard key={idx} feedbackUser={feedbackUser} />
        ))}
      </div>
      {/* </div> */}

      <div className="my-12">
        {user?.email ? (
          <Button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            size="lg"
            className="flex mx-auto justify-center items-center gap-3"
          >
            <BiPlusCircle size={20} />
            Add
          </Button>
        ) : (
          <Button
            onClick={handleNav}
            size="lg"
            className="flex mx-auto justify-center items-center gap-3"
          >
            <BiPlusCircle size={20} />
            Add
          </Button>
        )}
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
