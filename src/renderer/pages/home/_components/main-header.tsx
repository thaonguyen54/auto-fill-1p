import React from "react";
import type { User } from "@src/global.type";
import wrapPromise from "@utils/wrap-promise";

let userResource: { read: () => User } | null = null;

const fetchUser = () => {
  if (!userResource) {
    const promise = (window as any).electronAPI.user("user", "get");
    userResource = wrapPromise(promise);
  }
  return userResource;
};

const redirectCreateVault = () => {
  (window as any).electronAPI.openBrowserView("create-vault");
}

const MainHeader = () => {
  const user = fetchUser().read();

  return (
    <>
      <div className="mb-6">
        <h2 className="flex items-center text-2xl font-semibold pb-3">
          Welcome to 1Password, {user.name}
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
        <button onClick={redirectCreateVault} className="text-light-blue font-medium border p-2 border-light-blue rounded-full hover:bg-light-blue hover:text-white transition-colors">
          + New Vault
        </button>
      </div>
    </>
  );
};

export default MainHeader;