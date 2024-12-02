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
  link: string;
  locale: string;
};

const ONEPASSWORD_LOCALES: OnePasswordLocale[] = [
  { link: "1Password.ca", locale: "ca" },
  { link: "1Password.eu", locale: "eu" },
  { link: "ent.1Password.com", locale: "en" },
];

export function ComboboxLocale() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<OnePasswordLocale>(
    ONEPASSWORD_LOCALES[2]
  );

  const handleSelect = (locale: OnePasswordLocale) => {
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
          {value.link}
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
                  value={locale.link}
                  onSelect={() => handleSelect(locale)}
                >
                  {locale.link}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
