import { Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import FoodCard from "./FoodCard";

const FoodCardsSection = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/addfood`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  //   console.log(foods);
  return (
    <>
      <Typography className="my-10 text-center" variant="h3">
        Explore our categories to find your perfect meal:
      </Typography>
      <div className="my-5">
        <div className="flex mx-10 justify-end">
          <Search />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4">
        {foods?.map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </div>
    </>
  );
};

export default FoodCardsSection;
