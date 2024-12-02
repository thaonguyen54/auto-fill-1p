import { Button } from "@components/ui/button";

import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import React, { useState } from "react";
import { ComboboxLocale } from "./combobox-locale";
import Spinner from "@components/common/spinner";
import NewSignInForm from "./new-signin-form";
import ErrorToast from "./error-toast";

const CONTINUE_STYLE = {
  true: "bg-light-blue hover:bg-dark-secondary-blue",
  false:
    "bg-light-gray-blue text-neutral-gray hover:bg-light-gray-blue hover:cursor-not-allowed",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LockedContent = () => {
  const [isContinue, setContinue] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [newFormEnabled, setNewFormEnabled] = useState<boolean>(false);
  const [isEmailValid, setEmailValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (e.target.value.length > 0) {
      setContinue(true);
      setEmailValid(true);
    } else {
      setContinue(false);
    }
  };

  const handleContinue = () => {
    const isValidEmail = EMAIL_REGEX.test(email);
    if (!isValidEmail) {
      setEmailValid(false);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setNewFormEnabled(true);
      }, 1500);
    }
  };

  return (
    <div className="pt-[22vh] max-w-[420px] flex flex-grow flex-col w-auto  mr-16 items-start p-0">
      {!newFormEnabled ? (
        <NewSignInForm />
      ) : !isLoading ? (
        <div className=" flex-grow items-stretch w-full">
          <h1 className="font-sans font-semibold text-lg">
            Sign in to 1Password
          </h1>
          <Label
            htmlFor="email"
            className="text-light-secondary-gray font-normal "
          >
            Email
          </Label>
          <Input
            className="mt-2 mb-4 rounded-md px-4 py-3  bg-white focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
            type="email"
            onChange={handleInputEmail}
          />

          <div className="flex items-center justify-between w-full">
            <Button
              className={`rounded-3xl ${CONTINUE_STYLE[`${isContinue}`]}`}
              onClick={handleContinue}
            >
              Continue
            </Button>
            <a
              className="text-light-primary-blue  text-sm font-[625] hover:underline"
              href="https://my.1password.com/support?a=&email="
            >
              Having trouble signing in?
            </a>
          </div>
          {!isEmailValid && <ErrorToast message="Invalid Email" />}
        </div>
      ) : (
        <Spinner className="mt-6 mb-3" />
      )}

      <footer className="mt-12">
        <ComboboxLocale />
        <div className="mt-12">
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
