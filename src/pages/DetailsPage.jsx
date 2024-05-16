import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const singleFood = useLoaderData();
  const navigate = useNavigate();

  //   console.log(singleFood);
  const { user } = useAuth();
  // console.log(user.email);
  // if (!user?.email) {
  //   return navigate("/login");
  // }
  const {
    foodname,
    foodimage,
    foodcategory,
    price,
    quantity,
    _id,
    addusername,
    email,
    username,
    description,
    country,
  } = singleFood;
  console.log(email);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Wandering Fork | Food Detail Page</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="my-8">
        <Typography variant="h3" className="text-center">
          Your item {foodname} information here:
        </Typography>
      </div>
      <Card className="w-[30rem] mx-auto my-4">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            key={_id}
            src={foodimage}
            alt={foodname}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex flex-col items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              Food Name: {foodname}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Food Category: {foodcategory}
            </Typography>
          </div>
          <div className="mb-2 flex flex-col items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              Pirce:$ {price}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Quantity: {quantity}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Made By: {username}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Food Origin: {country}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            Description: {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {user?.email === email ? (
            <button className="btn btn-disabled">
              <Link to={`/purchasefood/${_id}`}>
                {/* <Button
                ripple={false}
                color="green"
                disabled
                fullWidth={true}
                className="shadow-none disabled hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Purchase
              </Button> */}
                Purchase
              </Link>
            </button>
          ) : (
            <Link to={`/purchasefood/${_id}`}>
              <Button
                ripple={false}
                color="green"
                fullWidth={true}
                className="shadow-none  hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Purchase
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default DetailsPage;
