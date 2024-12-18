import ChangeIcon from "@components/common/change-icon";

import { Button } from "@components/ui/button";

import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";

import React from "react";
import { useForm } from "react-hook-form";

const KEY_ICON =
  "https://a.1passwordusercontent.com/JKRNV44YYJCQBEUIYHMP2DAHH4/e34v23yfgzc7debxdcgookapuu.png";

interface CreateVaultFormProps {
  name: string;
  description: string;
}

const CrateVaultForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVaultFormProps>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [vaultName, setVaultName] = React.useState("");

  const handleCreateNewVault = async (data: CreateVaultFormProps) => {
    try {
      setIsLoading(true);
      setError("");
      await (window as any).electronAPI.vault("vault", "create", data);
      (window as any).electronAPI.openBrowserView("home");
    } catch (err) {
      setError("Network error, please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 bg-white border rounded-b-lg">
      <div className="flex flex-col justify-center items-center">
        <img src={KEY_ICON} alt="" className="w-16 h-16 rounded-full mb-4" />
        <ChangeIcon/>
      </div>
      <div>
        <form
          className="gap-4 mt-4"
          onSubmit={handleSubmit(handleCreateNewVault)}
        >
          <div className="flex flex-col gap-4">
            <Label htmlFor="vault-name">Vault Name</Label>
            <Input
              className={`${
                errors.name
                  ? "border-red-300 bg-red-50"
                  : "border-black focus-visible:ring-[2.5px] focus-visible:ring-offset-1 focus-visible:ring-light-blue focus:outline-none"
              } h-11 `}
              helperText={errors.name ? "Enter a vault name" : ""}
              type="vault-name"
              {...register("name", {
                required: true,
                onChange: (e) => setVaultName(e.target.value),
              })}
            />
            <Label htmlFor="vault-name">Description {"(optional)"}</Label>
            <Textarea
              className="w-full h-24 resize-y border-black focus-visible:ring-[2.5px] focus-visible:ring-offset-1 focus-visible:ring-light-blue focus:outline-none"
              placeholder="What should this vault be used for?"
              {...register("description")}
            />
            <Button
              className={`w-full h-11 font-normal text-base ${
                vaultName.length === 0
                  ? "hover:bg-gray-200 border border-gray-light"
                  : "hover:bg-dark-secondary-blue hover:text-white border border-light-blue bg-light-blue text-white"
              }`}
              variant="outline"
              type="submit"
            >
              {isLoading ? "Creating..." : "Create Vault"}
            </Button>
          </div>
        </form>
        {error.length > 0 && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default CrateVaultForm;