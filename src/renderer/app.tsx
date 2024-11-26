import React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import { Button } from "@components/ui/button";


const container = document.getElementById("root");

const App = () => {
  return (
    <div>
      <h1 className="text-red-500 bg-red-400">Hello World</h1>;
      <Button>Click me</Button>
    </div>
  );
};

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(React.createElement(App));
