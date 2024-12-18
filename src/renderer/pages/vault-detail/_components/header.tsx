import ChangeIcon from "@components/common/change-icon";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import React from "react";

const KEY_ICON =
  "https://a.1passwordusercontent.com/JKRNV44YYJCQBEUIYHMP2DAHH4/e34v23yfgzc7debxdcgookapuu.png";

const Header = () => {
  const [isEdit, setIsEdit] = React.useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div
      style={{
        backgroundPosition: "46% 2.5rem",
        backgroundSize: "462px 243px",
      }}
      className="w-full bg-vaultDetails flex justify-center bg-no-repeat"
    >
      <div className="2md:w-[280px] w-full h-auto flex flex-col p-5 justify-center items-center gap-3 bg-white border rounded-xl shadow-gray-shadow">
        <img src={KEY_ICON} alt="" className="w-16 h-16 rounded-full" />
        {isEdit ? (
          <div className="flex flex-col items-center gap-3 w-full">
            <ChangeIcon className="max-w-28" />
            <Input
              type="text"
              placeholder="Vault name"
              className="border border-gray-300 rounded-md  h-10 p-2 focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
            />
            <Input
              type="text"
              placeholder="Vault description"
              className="border border-gray-300 rounded-md  h-16 p-2 focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
            />
            <div className="flex gap-3 w-full mt-5">
              <Button
                variant={"outline"}
                onClick={handleEdit}
                className="h-7 w-full"
              >
                Cancel
              </Button>
              <Button
                className="h-7 w-full bg-light-blue hover:bg-dark-secondary-blue"
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <>
            <p className="font-sans font-medium text-xl">Vault name</p>
            <p className="mt-[-8px] mb-">Vault description</p>
            <Button
              onClick={handleEdit}
              className="mt-8 h-7 w-full bg-light-blue hover:bg-dark-secondary-blue"
            >
              Edit Details
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;