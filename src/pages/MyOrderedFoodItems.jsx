import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import OrderCard from "../components/OrderCard";
import Swal from "sweetalert2";

const MyOrderedFoodItems = () => {
  const { user } = useAuth();
  console.log(user?.email);

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

  return (
    <>
      <div className=" my-5 font-semibold text-center space-y-5">
        <Typography variant="h3">
          Revisit your past culinary adventures!
        </Typography>
        <Typography variant="paragraph">
          This section, also exclusive to registered users, provides a record of
          your past orders. <br /> This allows you to easily reorder your
          favorite dishes or rediscover a hidden gem from a previous visit.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4">
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
                fetch(`http://localhost:5000/purchasefood/${_id}`, {
                  method: "DELETE",
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount > 0) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your ordered item has been deleted.",
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
            <OrderCard item={item} handleDelete={handleDelete} key={idx} />
          );
        })}
      </div>
    </>
  );
};

export default MyOrderedFoodItems;
