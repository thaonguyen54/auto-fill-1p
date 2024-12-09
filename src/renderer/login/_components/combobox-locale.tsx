"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { Button } from "@components/ui/button";
import ChevronIcon from "@components/icon/chevron-icon";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@components/ui/command";

type OnePasswordLocale = {
  address: string;
  locale: string;
};

const ONEPASSWORD_LOCALES: OnePasswordLocale[] = [
  { address: "https://my.1password.ca/", locale: "ca" },
  { address: "https://my.1password.eu/", locale: "eu" },
  { address: "https://my.ent.1password.com/", locale: "ent" },
  { address: "https://my.1password.com/", locale: "en" },
];

type ComboboxLocaleProps = {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
};

export function ComboboxLocale({ setAddress }: ComboboxLocaleProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<OnePasswordLocale>(
    ONEPASSWORD_LOCALES[3]
  );

  const handleSelect = (locale: OnePasswordLocale) => {
    setAddress(locale.locale);
    setValue(locale);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between hover:border-light-blue border"
        >
          {value.address}
          <ChevronIcon width="6" height="6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {ONEPASSWORD_LOCALES.map((locale) => (
                <CommandItem
                  key={locale.locale}
                  value={locale.address}
                  onSelect={() => handleSelect(locale)}
                >
                  {locale.address}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
