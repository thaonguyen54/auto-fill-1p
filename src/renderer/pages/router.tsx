import React from "react";
import { Route, Routes } from "react-router";
import type { RouterType } from "./type";
import pagesData from "./page";

const InitRoute = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      {pageRoutes}
    </Routes>
  );
};

export default InitRoute;