import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { foodname, foodimage, foodcategory, price, quantity, _id } = food;

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img key={_id} src={foodimage} alt={foodname} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Food Name :{foodname}
        </Typography>

        <Typography variant="h5" color="blue-gray" className="mb-2">
          Food Category :{foodcategory}
        </Typography>

        <Typography variant="h5" color="blue-gray" className="mb-2">
          Price $:{price}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Quantity :{quantity}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/addfood/${_id}`}>
          <Button>Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
