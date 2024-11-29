"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover";
import { Button } from "@components/ui/button";
import ChevronIcon from "@components/icon/chevron-icon";
import { Command, CommandGroup, CommandItem, CommandList } from "@components/ui/command";

interface OnePasswordLocaleProps {
  icon: React.ReactNode;
  link: string;
  locale: string;
}

const ONEPASSWORD_LOCALES: OnePasswordLocaleProps[] = [
  { icon: <Check />, link: "1Password.ca", locale: "ca" },
  { icon: <Check />, link: "1Password.eu", locale: "eu" },
  { icon: <Check />, link: "ent.1Password.com", locale: "en" },
];

export function ComboboxLocale() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<OnePasswordLocaleProps>(
    ONEPASSWORD_LOCALES[2]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between hover:border-[#0572ec] border"
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
                  onSelect={() => {
                    setValue(locale);
                    setOpen(false);
                  }}
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
