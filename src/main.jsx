import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProviders from "./providers/AuthProviders.jsx";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProviders>
  </React.StrictMode>
);
