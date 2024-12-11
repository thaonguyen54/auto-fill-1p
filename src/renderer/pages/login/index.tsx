import React from "react";
import LockedContainer from "./_components/locked-container";
import NewsFrame from "./_components/news-frame";

const Login = () => {
  return (
    <div className="bg-secondary-white overflow-auto min-h-screen flex flex-wrap justify-center">
      <LockedContainer />
      <NewsFrame />
    </div>
  );
};

export default Login;
