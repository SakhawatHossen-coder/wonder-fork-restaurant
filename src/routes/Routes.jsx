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
        path: "/allfoodpage",
        element: <AllFoodPage />,
      },

      {
        path: "/myaddedfooditems",
        element: <MyAddedFooditems />,
      },
      {
        path: "/myorderedfooditems",
        element: <MyOrderedFoodItems />,
      },
      {
        path: "/addfooditem",
        element: <AddFoodItem />,
      },
    ],
  },
]);
export default router;
