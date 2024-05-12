import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const singleFood = useLoaderData();
  //   console.log(singleFood);
  const {
    foodname,
    foodimage,
    foodcategory,
    price,
    quantity,
    _id,
    addusername,
    description,
    country,
  } = singleFood;
  return (
    <>
      <div className="my-8">
        <Typography variant="h3" className="text-center">
          details page
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
              Made By: {addusername}
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
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Purchase
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default DetailsPage;
