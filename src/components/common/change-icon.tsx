import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";
import Grid from "./grid";

const KEY_ICON =
  "https://a.1passwordusercontent.com/JKRNV44YYJCQBEUIYHMP2DAHH4/e34v23yfgzc7debxdcgookapuu.png";

const ICONS = Array.from({ length: 20 }, () => (
  <img src={KEY_ICON} alt="" className="w-8 h-8 rounded-full" />
));

interface ChangeIconProps {
  className?: string;
}

const ChangeIcon = ({ className }: ChangeIconProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`px-1 h-7 rounded-lg border-blue-400 ${className}`}
        >
          <p className="text-blue-600 font-normal">Change icon</p>
          <ChevronDown className="text-light-blue" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <Grid gap={2} className="overflow-y-scroll h-40">
          {ICONS.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </Grid>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeIcon;