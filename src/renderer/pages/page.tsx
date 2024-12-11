import React from "react";

import Home from "./home";
import Vault from "./vault";
import Login from "./login";

import type { RouterType } from "./type";

const PAGES: RouterType[] = [
  {
    path: "/",
    element: <Login />,
    title: "Login",
  },
  {
    path: "/home",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/vault",
    element: <Vault />,
    title: "Vault",
  },
];

export default PAGES;