import LogoutIcon from "@components/icon/logout-icon";
import NotiticationIcon from "@components/icon/notification-icon";

import React from "react";

const ONEPASSWORD_ICON =
  "https://app.1password.com/images/1password-icon-ca60f9cda8fbce72a8ba.svg";

interface WithHeaderProps {
  name: string;
}

const handleLogout = async () => {
 await (window as any).electronAPI.auth("auth", "logout");
};

const redirectHomePage = () => {
  (window as any).electronAPI.openBrowserView("home");
}

const Header = ({ name }: WithHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b px-5 py-3">
      <div className="flex justify-between items-center">
        <img onClick={redirectHomePage} src={ONEPASSWORD_ICON} alt="main-icon" className="h-12 w-12 cursor-pointer" />
        <div className="ml-2 font-sans font-bold text-xl">{name}</div>
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <NotiticationIcon width={30} height={30} />
          <LogoutIcon onClick={handleLogout} width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Header;