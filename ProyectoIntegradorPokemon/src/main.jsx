import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Aron from "./Componentes/Pokemones/Aron/Aron";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Aron />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
