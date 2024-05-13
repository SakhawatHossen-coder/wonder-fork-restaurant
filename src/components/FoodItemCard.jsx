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
const FoodItemCard = ({ item, handleDelete }) => {
  const { foodimage, foodname, price, description, _id } = item;

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img key={_id} src={foodimage} alt={foodname} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {foodname}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Price:$ {price}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between">
        <Link to={`/addfood/update/${_id}`}>
          <Button color="green">Update</Button>
        </Link>
        <Button onClick={() => handleDelete(_id)} color="red">
          X
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodItemCard;
