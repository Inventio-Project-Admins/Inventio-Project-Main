import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FrameEleven from "pages/FrameEleven";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "frameeleven",
      element: <FrameEleven />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
