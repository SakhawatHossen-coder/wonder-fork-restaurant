import React from "react";

const FoodPageBanner = () => {
  return (
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
            {" "}
            The Wandering Folk | All Foods
          </h1>
          <p className="mb-5">
            Explore our diverse menu featuring exceptional local & international
            cuisine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPageBanner;
