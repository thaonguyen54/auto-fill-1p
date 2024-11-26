import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const container = document.getElementById("root");

const App = () => {
  return <h1 className="text-red-500 bg-red-400">Hello World</h1>;
};

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(React.createElement(App));
