import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* Top Food */}

      {/* FAQ */}
      <div className="my-10">
      <Faq/>
      </div>
        
    </div>
  );
};

export default Home;
