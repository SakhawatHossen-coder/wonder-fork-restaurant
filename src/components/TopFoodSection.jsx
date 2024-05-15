import React, { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Typography } from "@material-tailwind/react";

const TopFoodSection = () => {
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
      <div className=" my-5 font-semibold text-center space-y-5">
        <Typography variant="h3">
          Indulge in our most popular dishes, chosen by our discerning
          customers!
        </Typography>
        <Typography variant="paragraph">
          we're passionate about creating exceptional food experiences. <br /> Our top
          sellers reflect the favorites of our loyal diners, offering a
          delicious starting point for your culinary journey.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {foods?.map((food, idx) => (
          <TopFoodCard food={food} key={idx} />
        ))}
      </div>
    </>
  );
};

export default TopFoodSection;
