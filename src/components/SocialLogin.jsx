import React from "react";
import { BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const SocialLogin = () => {
  const { googleLogin, twitterLogin, githubLogin } = useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state || "/";
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      // const loggedInUser = result.user;
      // console.log(loggedInUser);
      // const user = { email };
      // axios
      //   .post("http://localhost:5000/jwt", user, {
      //     withCredentials: true,
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //     navigate(from, { replace: true });
      //   });
      if (result.user) {
        Swal.fire({
          title: "Log In Successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from);
      }
    });
  };
  return (
    <>
      <button
        onClick={() => handleSocialLogin(googleLogin)}
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
        onClick={() => handleSocialLogin(twitterLogin)}
        type="button"
        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <span className="ml-4 flex items-center gap-3">
            <BsTwitter />
            Log in with Twitter
          </span>
        </div>
      </button>
      <button
        onClick={() => handleSocialLogin(githubLogin)}
        type="button"
        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <span className="ml-4 flex items-center gap-3">
            <BsGithub />
            Log in with Github
          </span>
        </div>
      </button>
    </>
  );
};

export default SocialLogin;
