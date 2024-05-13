import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import FoodItemCard from "../components/FoodItemCard";

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
      <div>MyAddedFooditems</div>
      <div>
        {items?.map((item, idx) => (
          <FoodItemCard key={idx} item={item} />
        ))}
      </div>
    </>
  );
};

export default MyAddedFooditems;
