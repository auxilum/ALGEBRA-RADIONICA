import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Popis_filmova from "./components/Popis_filmova.jsx";
import Film from "./components/Film.jsx";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/popis_filmova",
        element: <Popis_filmova />,
        children: [
          {
            path: "/popis_filmova/film",
            element: <Film />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Root} />
  </React.StrictMode>
);
