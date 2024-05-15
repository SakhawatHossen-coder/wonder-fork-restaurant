import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import TopFoodSection from "../components/TopFoodSection";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* Top Food */}
      <TopFoodSection />
      {/* FAQ */}
      <div className="my-6">
        <Faq />
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
