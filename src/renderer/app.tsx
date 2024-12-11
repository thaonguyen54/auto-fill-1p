import React from "react";
import { BrowserRouter as Router } from "react-router";
import CONFIG from "../../configs/config";
import "../styles.css";

import RootContainer from "../utils/dom";
import InitRoute from "./pages/router";
import Login from "./pages/login";

const initApp = () => {
  if (CONFIG.ENV === "development") {
    return (
      <Router>
        <InitRoute />
      </Router>
    );
  }else{
    return <Login />;
  }
};

const App = () => {
  return (
    initApp()
  );
};

RootContainer.getRoot().render(<App />);
