import React from "react";

import Home from "./home";
import Vault from "./vault";
import Login from "./login";
import CreateVault from "./create-vault";
import VaultDetails from "./vault-detail";

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
  {
    path: "create-vault",
    element: <CreateVault />,
    title: "Create Vault",
  },
  {
    path: "vault-details",
    element: <VaultDetails />,
    title: "Vault Details",
  },
];

export default PAGES;