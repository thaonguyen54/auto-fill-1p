import React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import { Button } from "@components/ui/button";
import Login from "./login";

const container = document.getElementById("root");

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Login />
      <Button>Click me</Button>
    </div>
  );
};

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(React.createElement(App));
