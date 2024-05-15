import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import TopFoodSection from "../components/TopFoodSection";
import Newsletter from "../components/Newsletter";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Wandering Fork | Culinary</title>
        <link rel="canonical" href="" />
      </Helmet>
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
