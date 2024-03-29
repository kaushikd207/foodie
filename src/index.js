import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardBody from "./components/CardBody";
import About from "./components/Contact";
import Cart from "./components/Card";
import Contact from "./components/Contact";
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <CardBody />, errorElement: <CardBody /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contact", element: <Cart /> },
    ],
  },
]);
root.render(<RouterProvider router={appRouter}></RouterProvider>);

reportWebVitals();
