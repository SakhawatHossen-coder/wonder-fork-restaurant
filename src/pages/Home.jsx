import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import TopFoodSection from "../components/TopFoodSection";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* Top Food */}
<TopFoodSection/>
      {/* FAQ */}
      <div className="my-10">
      <Faq/>
      </div>
        
    </div>
  );
};

export default Home;
