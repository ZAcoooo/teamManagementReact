import React from "react";
import ReactDOM from "react-dom/client";
import IndexPage from "./pages/IndexPage.jsx";
import LeaderHome from "./pages/LeaderHome.jsx";
import MemberHome from "./pages/MemberHome.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import CreateTaskPage from "./pages/CreateTaskPage.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Project/CreateTask",
    element: <CreateTaskPage />,
  },
  {
    path: "/Project",
    element: <ProjectPage />,
  },
  {
    path: "/Leader",
    element: <LeaderHome />,
  },
  {
    path: "/Member",
    element: <MemberHome />,
  },
  {
    path: "/",
    element: <IndexPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
