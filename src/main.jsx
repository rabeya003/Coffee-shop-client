import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddCoffee from "./Components/AddCoffee.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Signup from "./Components/Signup.jsx";
import Signin from "./Components/Signin.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      fetch("https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/coffee"),
    errorElement: <ErrorPage />,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () =>
      fetch("https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/users"),
  },
  {
    path: "/updateUser/:id",
    element: <UpdateUser />,
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-1xx3ez9au-anfal11.vercel.app/users/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
