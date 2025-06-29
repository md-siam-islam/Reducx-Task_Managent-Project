import {
  createBrowserRouter,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Homelayout from "@/Homelauout/Homelayout";
import HomeSection from "@/HomepageSection/HomeSection";
import Tasks from "@/page/Tasks/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout/>,
    children : [
        {
            path:"/",
            element:<HomeSection></HomeSection>
        },
        {
            path:"/tasks",
            element:<Tasks></Tasks>
        }
    ]
  },
]);

export default router