import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import FoodItemCard from "../components/FoodItemCard";
import { Helmet } from "react-helmet";

const MyAddedFooditems = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addfood/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
      });
  }, [user]);
  console.log(items);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Wandering Fork | My Added Food Items</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
        {items?.map((item, idx) => {
          return <FoodItemCard key={idx} item={item} />;
        })}
      </div>
    </>
  );
};

export default MyAddedFooditems;
