import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";

const OrderCard = ({ item, handleDelete }) => {
  const { foodname, foodimage, date, username, price, _id } = item;

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img key={_id} src={foodimage} alt={foodname} />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {foodname}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Price:$ {price}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Addedd Time: {date}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Owner: {username}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={() => handleDelete(_id)}
          color="red"
          className="flex items-center justify-center gap-2"
        >
          <FaTrash />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderCard;
