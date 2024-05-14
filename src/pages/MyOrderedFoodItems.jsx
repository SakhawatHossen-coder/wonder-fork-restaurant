import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyOrderedFoodItems = () => {
  const { user } = useAuth();

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/purchasefood/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
      });
  }, [user]);
  console.log(items);
  return <div>MyOrderedFoodItems</div>;
};

export default MyOrderedFoodItems;
