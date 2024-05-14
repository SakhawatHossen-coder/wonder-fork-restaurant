import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyOrderedFoodItems = () => {
  const { user } = useAuth();
  console.log(user?.email);
  // Get the ID from route parameters
  // const params = useParams();
  // const [foodData, setFoodData] = useState(null);

  // useEffect(() => {
  //   // Assuming you're using a library like react-router-dom v6
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `http://localhost:5000/addfood/${params.id}`
  //     );
  //     const data = await response.json();
  //     setFoodData(data);
  //   };
  //   fetchData();
  // }, []);
  // console.log(foodData);

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
