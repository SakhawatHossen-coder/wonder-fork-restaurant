import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { email, password, photo, name } = data;
    // console.log(data);
    const validatePassword = (password) => {
      return (
        password.length >= 6 && // Minimum length
        /[A-Z]/.test(password) && // Contains uppercase letter
        /[a-z]/.test(password)
      );
    };
    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      // Display error message to the user
      Swal.fire({
        title: "Error! Invalid Password",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Ok",
      });

      return; // Prevent further execution if password is invalid
    }
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {
          const user = result.user;
          // console.log(user);
          Swal.fire({
            title: "Successfully User Created ",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/login");
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Invalid email/password ",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Wandering Fork | Register Page</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="h-screen md:flex my-20">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div className="mx-10">
            <h1 className="text-white font-bold text-4xl font-sans">
              Create an account and unlock a world of culinary delights.
            </h1>
            <p className="text-white mt-1">
              By registering with [Restaurant Name], you'll gain access to a
              variety of exclusive benefits that will enhance your dining
              experience.
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Photo Url"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-deep-orange-400">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-deep-orange-400">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <p className="text-deep-orange-400">This field is required</p>
              )}
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name=""
                id=""
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-deep-orange-400">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Register
            </button>
            <p className="text-xs opacity-80 my-4">
              {" "}
              your password -
              <ul>
                <li> ● Must have an Uppercase letter in the password</li>
                <li>● Must have a Lowercase letter in the password</li>
                <li>● Length must be at least 6 character</li>
              </ul>
            </p>
            <span className="my-5 font-semibold p-2 px-2">
              Already have an Account?
              <Link className="text-blue-500 pl-2" to="/login">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
