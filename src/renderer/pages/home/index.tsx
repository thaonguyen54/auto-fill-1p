import React from "react";
import RootContainer from "@utils/dom";

import Header from "./_components/header";
import MainContent from "./_components/main-content";

const Home = () => {
  return (
    <div className="w-full h-full min-h-screen">
      <Header/>
      <MainContent/>
    </div>
  );
};

RootContainer.getRoot().render(<Home />);

export default Home;