import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen object-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=600)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white">
            Experience exceptional food, vibrant culture, and lasting memories.
          </h1>
          <p className="mb-5">
            Indulge in more than just a meal at [Your Restaurant Name]. We are a
            renowned restaurant brand dedicated to crafting unforgettable dining
            experiences. Our passion lies in exceeding expectations by curating
            a sensory adventure that goes beyond the plate.
          </p>
          <Button color="blue" className="">
            <Link to="/allfoodpage">All Foods</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
