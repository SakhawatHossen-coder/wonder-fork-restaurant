import React, { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TopFoodSection = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-ass11.vercel.app/addfood`)
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
          we're passionate about creating exceptional food experiences. <br />{" "}
          Our top sellers reflect the favorites of our loyal diners, offering a
          delicious starting point for your culinary journey.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {foods?.slice(0, 6).map((food, idx) => (
          <TopFoodCard food={food} key={idx} />
        ))}
      </div>

      <div className="flex justify-center items-center my-7">
        <Link to="/allfoodpage">
          <button className="btn btn-outline btn-md">See All</button>
        </Link>
      </div>
    </>
  );
};

export default TopFoodSection;
