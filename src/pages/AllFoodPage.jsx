import React from "react";
import FoodPageBanner from "../components/FoodPageBanner";
import FoodCardsSection from "../components/FoodCardsSection";

const AllFoodPage = () => {
  return (
    <>
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
