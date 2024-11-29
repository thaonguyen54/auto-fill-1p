import { Button } from "@components/ui/button";

import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import React from "react";
import { ComboboxLocale } from "./combobox-locale";

const LockedContent = () => {
  return (
    <div className="pt-[22vh] max-w-[420px] flex flex-grow flex-col w-full mr-16 items-start p-0">
      <div className=" flex-grow items-stretch w-full">
        <h1 className="font-sans font-semibold text-lg">
          Sign in to 1Password
        </h1>
        <Label htmlFor="email" className="text-light-secondary-gray font-normal ">
          Email
        </Label>
        <Input
          className="mt-2 mb-4 rounded-md px-4 py-3 border bg-white border-light-gray focus:border-blue-600"
          style={{ borderStyle: "inset" }}
          type="email"
        />
        <div className="flex items-center justify-between w-full mb-9">
          <Button className="bg-light-blue hover:bg-dark-secondary-blue rounded-3xl ">
            Continue
          </Button>
          <a
            className="text-light-primary-blue  text-sm font-[625]"
            href="https://my.1password.com/support?a=&email="
          >
            Having trouble signing in?
          </a>
        </div>
      </div>

      <footer>
        <ComboboxLocale />
        <div className="block mt-12">
          <a
            href="https://my.1password.com/support"
            className="text-blue-600 text-sm font-medium"
          >
            Find my account{" "}
          </a>
          &#x2022;{" "}
          <a
            href="https://start.1password.com/signin/team?l=en"
            className="text-blue-600 text-sm font-medium"
          >
            Have a team account?{" "}
          </a>
          &#x2022;{" "}
          <a
            href="https://1password.com/sign-up/"
            className="text-blue-600 text-sm font-medium"
          >
            Create a new account{" "}
          </a>
        </div>
        <small className="text-[10px] leading-4">
          <a
            href="https://app-updates.agilebits.com/product_history/B5"
            target="_blank"
          >
            <span className="text-blue-600">Version 1883</span>
          </a>{" "}
          — © 2024
          <a href="https://1password.com" target="_blank">
            <span className="text-blue-600"> 1Password</span>
          </a>
          . All rights reserved. 4711 Yonge St, 10th Floor, Toronto, Ontario,
          M2N 6K8, Canada.
        </small>
      </footer>
    </div>
  );
};

export default LockedContent;
