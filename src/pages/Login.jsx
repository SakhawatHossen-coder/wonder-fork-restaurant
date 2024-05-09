import React from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const onSubmit = (data) => {
    const { email, password } = data;
    // console.log(data);
    logIn(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Log In Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
          // console.log(result.user);
          navigate(from);
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Try Again! Invalid Credentials",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center mb-24 mt-32">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://source.unsplash.com/s"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full mx-auto text-center">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                  {...register("email", { required: true })}
                />
                {errors.photo && (
                  <span className="text-deep-orange-400">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-deep-orange-400">
                    This field is required
                  </span>
                )}
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>
            <div className="my-5 font-semibold p-2 px-2">
              Don't have an Account?
              <Link className="text-blue-500 pl-2" to="/register">
                Register
              </Link>
            </div>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <span className="ml-4 flex items-center gap-3">
                  <BsGoogle />
                  Log in with Google
                </span>
              </div>
            </button>
            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <span className="ml-4 flex items-center gap-3">
                  <BsGoogle />
                  Log in with Twitter
                </span>
              </div>
            </button>
            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <span className="ml-4 flex items-center gap-3">
                  <BsGoogle />
                  Log in with Github
                </span>
              </div>
            </button>

            <p className="mt-8 mb-20">
              Need an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
