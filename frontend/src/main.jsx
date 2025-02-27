import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
