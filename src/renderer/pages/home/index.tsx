import React from "react";
import RootContainer from "@utils/dom";

import MainContent from "./_components/main-content";
import WithHeader from "@src/layout/with-header";

import "@src/styles.css";

const Home = () => {
  return (
    <WithHeader headerName="1Password">
      <MainContent />
    </WithHeader>
  );
};

RootContainer.getRoot().render(<Home />);

export default Home;