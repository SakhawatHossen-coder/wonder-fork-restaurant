import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import FoodItemCard from "../components/FoodItemCard";
import Swal from "sweetalert2";

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
        {items?.map((item, idx) => {
            const handleDelete = (_id) => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  fetch(`http://localhost:5000/addfood/${item._id}`, {
                    method: "DELETE",
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your item has been deleted.",
                          icon: "success",
                        });
                        const remaining = items.filter((i) => i._id !== _id);
                        setItems(remaining);
                      }
                    });
                }
              });
            };
        
          return (
            <FoodItemCard key={idx} handleDelete={handleDelete} item={item} />
          );})}
      </div>
    </>
  );
};

export default MyAddedFooditems;
