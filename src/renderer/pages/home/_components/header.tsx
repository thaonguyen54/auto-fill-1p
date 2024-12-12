import LogoutIcon from "@components/icon/logout-icon";
import NotiticationIcon from "@components/icon/notification-icon";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center border-b px-5 py-3">
      <div className="flex items-center">
        <img
          src="https://app.1password.com/images/1password-icon-ca60f9cda8fbce72a8ba.svg"
          alt="main-icon"
          className="h-12 w-12"
        />
      </div>
      <div className="ml-2 font-sans font-bold text-xl">1Password</div>
      <div className="flex items-center gap-4 hover:cursor-pointer">
        <NotiticationIcon width={30} height={30} />
        <LogoutIcon width={40} height={40} />
      </div>
    </div>
  );
};

export default Header;
