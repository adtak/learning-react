import "./App.css";
import Home from "../Pages/Home";
import UserList from "../Pages/UserList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/list",
      element: <UserList></UserList>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
