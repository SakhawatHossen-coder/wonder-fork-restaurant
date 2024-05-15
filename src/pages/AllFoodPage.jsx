import React from "react";
import FoodPageBanner from "../components/FoodPageBanner";
import FoodCardsSection from "../components/FoodCardsSection";
import { Helmet } from "react-helmet";

const AllFoodPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Wandering Fork | All Food Page</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div>
        <FoodPageBanner />
      </div>
      <div>
        <FoodCardsSection />
      </div>
    </>
  );
};

export default AllFoodPage;
