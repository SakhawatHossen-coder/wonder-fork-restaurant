import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllFoodPage from "../pages/AllFoodPage";
import MyAddedFooditems from "../pages/MyAddedFooditems";
import AddFoodItem from "../pages/AddFoodItem";
import MyOrderedFoodItems from "../pages/MyOrderedFoodItems";
import DetailsPage from "../pages/DetailsPage";
import FoodPurchasePage from "../pages/FoodPurchasePage";
import GallaryPage from "../pages/GallaryPage";
import PrivateRoutes from "./PrivateRoutes";
import FoodUpdatePage from "../pages/FoodUpdatePage";
import MyPurchasePage from "../pages/MyPurchasePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addfood/:id",
        element: <DetailsPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/addfood/${params.id}`),
      },
      {
        path: "/addfood/update/:id",
        element: <FoodUpdatePage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/addfood/${params.id}`),
      },
      {
        path: "/purchasefood/:id",
        element: (
          <PrivateRoutes>
            <FoodPurchasePage />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/purchasefood/${params.id}`),
      },
      {
        path: "/allfoodpage",
        element: <AllFoodPage />,
      },

      {
        path: "/myaddedfooditems",
        element: (
          <PrivateRoutes>
            <MyAddedFooditems />
          </PrivateRoutes>
        ),
      },
      {
        path: "/mypurchasepage",
        element: (
          <PrivateRoutes>
            <MyPurchasePage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myorderedfooditems",
        element: (
          <PrivateRoutes>
            <MyOrderedFoodItems />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addfooditem",
        element: <AddFoodItem />,
      },
      {
        path: "/gallery",
        element: <GallaryPage />,
      },
    ],
  },
]);
export default router;
