import { Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import FoodCard from "./FoodCard";

const FoodCardsSection = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/addfood`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
//   console.log(foods);
  return (
    <>
      <Typography className="my-10 text-center" variant="lead">
        Food Cards Section
      </Typography>
      <div>
        <div className="flex mx-10 justify-end">
          <Search />
        </div>
        <div className="my-6">
          <Typography variant="h3" className="text-center">
            Explore our categories to find your perfect meal:
          </Typography>
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
