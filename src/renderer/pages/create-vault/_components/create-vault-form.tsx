import Grid from "@components/common/grid";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";

import { ChevronDown } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const KEY_ICON =
  "https://a.1passwordusercontent.com/JKRNV44YYJCQBEUIYHMP2DAHH4/e34v23yfgzc7debxdcgookapuu.png";

interface CreateVaultFormProps {
  vaultName: string;
  description: string;
}

const ICONS = Array.from({ length: 30 }, () => (
  <img src={KEY_ICON} alt="" className="w-8 h-8 rounded-full" />
));

const CrateVaultForm = () => {
  const { register, handleSubmit } = useForm<CreateVaultFormProps>();

  const handleCreateNewVault = async (data: CreateVaultFormProps) => {
    console.log(data);
  };

  return (
    <div className="p-8 bg-white border rounded-b-lg">
      <div className="flex flex-col justify-center items-center">
        <img src={KEY_ICON} alt="" className="w-16 h-16 rounded-full mb-4" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="px-1 h-7 rounded-lg border-blue-400"
            >
              <p className="text-blue-600 font-normal">Change icon</p>
              <ChevronDown className="text-light-blue" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <Grid gap={4} className="overflow-y-scroll h-40">
              {ICONS.map((icon, index) => (
                <div key={index}>{icon}</div>
              ))}
            </Grid>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <form
          className="gap-4 mt-4"
          onSubmit={handleSubmit(handleCreateNewVault)}
        >
          <div className="flex flex-col gap-4">
            <Label htmlFor="vault-name">Vault Name</Label>
            <Input
              className="h-11 border-black focus-visible:ring-[2.5px] focus-visible:ring-offset-1 focus-visible:ring-light-blue focus:outline-none"
              type="vault-name"
              {...register("vaultName")}
            />
            <Label htmlFor="vault-name">Description {"(optional)"}</Label>
            <Textarea
              className="w-full h-24 resize-y border-black focus-visible:ring-[2.5px] focus-visible:ring-offset-1 focus-visible:ring-light-blue focus:outline-none"
              placeholder="What should this vault be used for?"
              {...register("description")}
            />
            <Button
              className="w-full h-11 font-normal text-base hover:bg-gray-200 border border-gray-light"
              variant={"outline"}
              type="submit"
            >
              Create Vault
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrateVaultForm;