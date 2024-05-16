import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import FoodItemCard from "../components/FoodItemCard";
import { Helmet } from "react-helmet";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyAddedFooditems = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/addfood/email/${user?.email}`)
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
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
          {items?.map((item, idx) => {
            console.log(item.email);
            const handleDelete = (_id) => {
              if (user?.email !== item?.email)
                return toast.error("you can not delete");
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
                  fetch(`${import.meta.env.VITE_BASE_URL}/addfood/${_id}`, {
                    method: "DELETE",
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your added item has been deleted.",
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
              <FoodItemCard handleDelete={handleDelete} key={idx} item={item} />
            );
          })}
        </div>
      ) : (
        <div className="text-center">
          <Typography variant="h3">
            You don't have added yet. <br />
            Do you want to Add?
          </Typography>
          <Link to="/addfooditem">
            <Button>ADD</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default MyAddedFooditems;
