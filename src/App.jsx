import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MasterLayout } from "./components/MasterLayout";
import { Slider } from "./components/Slider";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <MasterLayout />,
    },
    {
      path: "/",
      element: <MasterLayout />,
      children: [{ path: "home", element: <Slider /> }],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
