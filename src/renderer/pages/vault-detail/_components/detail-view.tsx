import React from "react";

import Header from "./header";
import VaultAction from "./vault-action";
import Footer from "./footer";

const DetailView = () => {
  return (
    <div className="mt-10 max-w-[1024px] my-0 mx-auto 2md:block flex flex-col">
      <Header />
      <VaultAction />
      <Footer/>
    </div>
  );
};

export default DetailView;