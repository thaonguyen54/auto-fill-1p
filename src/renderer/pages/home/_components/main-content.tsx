import Grid from "@components/common/grid";
import React from "react";
import Vault from "./vault";

const VAULTS = [
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
  {
    vault: <Vault />,
  },
];

const MainContent = () => {
  return (
    <div className="p-8 w-full h-full pt-28">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold pb-3">
          Welcome to 1Password, Nhat Thao.
        </h2>
        <p>
          Do even more with 1Password.{" "}
          <span className="text-dark-secondary-blue hover:cursor-pointer">
            Explore your account
          </span>
        </p>
      </div>
      <div className="flex  justify-between items-center">
        <h2 className="text-xl font-semibold">Vaults</h2>
        <button className="text-light-blue font-medium border p-2 border-light-blue rounded-full hover:bg-light-blue hover:text-white transition-colors">
          + New Vault
        </button>
      </div>

      <Grid columns={"default"} gap={10}>
        {VAULTS.map((item, index) => (
          <div key={index}>{item.vault}</div>
        ))}
      </Grid>
    </div>
  );
};

export default MainContent;
