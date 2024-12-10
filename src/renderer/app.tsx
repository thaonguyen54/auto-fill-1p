import React from "react";
import { BrowserRouter as Router } from "react-router";

import "../styles.css";

import RootContainer from "../utils/dom";
import InitRoute from "./pages/router";

const App = () => {
  return (
    <Router>
      <InitRoute />
    </Router>
  );
};

RootContainer.getRoot().render(<App />);