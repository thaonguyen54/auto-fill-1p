import React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import Login from "./login";

const container = document.getElementById("root");

const App = () => {
  return (
    <div className="w-full h-full">
      <Login />
    </div>
  );
};

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(React.createElement(App));
