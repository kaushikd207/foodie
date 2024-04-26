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
import { Provider } from "react-redux";
import { store } from "./store";
import MenuCard from "./components/MenuCard";
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
      { path: "/restaurant/:restId", element: <MenuCard /> },
    ],
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}></RouterProvider>
  </Provider>
);

reportWebVitals();
