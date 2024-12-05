import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import React from "react";
import ErrorToast from "./error-toast";
import useFormStore from "@stores/formStore";

const CONTINUE_STYLE = {
  true: "bg-light-blue hover:bg-dark-secondary-blue",
  false:
    "bg-light-gray-blue text-neutral-gray hover:bg-light-gray-blue hover:cursor-not-allowed",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const InitalForm = () => {
  const formStore = useFormStore();
  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    formStore.setEmail(emailValue);

    if (e.target.value.length > 0) {
      formStore.setContinue(true);
      formStore.setEmailValid(true);
    } else {
      formStore.setContinue(false);
    }
  };

  const handleContinue = async () => {
    const isValidEmail = EMAIL_REGEX.test(formStore.email);
    if (!isValidEmail) {
      formStore.setEmailValid(false);
    } else {
      formStore.setLoading(true);
      setTimeout(() => {
        formStore.setLoading(false);
        formStore.setNewFormEnabled(true);
      }, 1500);
    }
  };

  return (
    <div className=" flex-grow items-stretch w-full">
      <h1 className="font-sans font-semibold text-lg">Sign in to 1Password</h1>
      <Label htmlFor="email" className="text-light-secondary-gray font-normal ">
        Email
      </Label>
      <Input
        className="mt-2 mb-4 rounded-md px-4 py-3  bg-white focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
        type="email"
        onChange={handleInputEmail}
      />

      <div className="flex items-center justify-between w-full">
        <Button
          className={`rounded-3xl ${CONTINUE_STYLE[`${formStore.isContinue}`]}`}
          onClick={handleContinue}
        >
          Login
        </Button>
        <a
          className="text-light-primary-blue  text-sm font-[625] hover:underline"
          href="https://my.1password.com/support?a=&email="
        >
          Having trouble signing in?
        </a>
      </div>
      {!formStore.isEmailValid && <ErrorToast message="Invalid Email" />}
    </div>
  );
};

export default InitalForm;
