import React, { useState } from "react";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import LinkIcon from "@components/icon/link-icon";
import { Checkbox } from "@components/ui/checkbox";

import { useForm } from "react-hook-form";
import ErrorToast from "./error-toast";
import useFormStore from "@stores/formStore";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SignInFormProps {
  email: string;
  secretKey: string;
  password: string;
}

const NewSignInForm = () => {
  const formStore = useFormStore();

  const { register, handleSubmit } = useForm<SignInFormProps>();
  const [error, setError] = useState<string>("");

  const handleValidate = (data: SignInFormProps) => {
    if (!EMAIL_REGEX.test(data.email)) {
      setError("Invalid email");
    } else {
      setError("");
    }
  };

  const onSubmit = (data: SignInFormProps) => {
    handleValidate(data);
  };

  return (
    <div className="flex-grow items-stretch w-full">
      <h1 className="font-sans font-semibold text-base">
        Sign in to your 1Password account
      </h1>
      <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
        <Label
          htmlFor="email"
          className="text-light-secondary-gray font-normal"
        >
          Email
        </Label>
        <Input
          className="mt-2 mb-4 rounded-md px-4 py-3 bg-white focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
          type="email"
          defaultValue={formStore.email}
          {...register("email")}
        />
        <div className="flex items-center justify-between">
          <Label
            htmlFor="secretKey"
            className="text-light-secondary-gray font-normal"
          >
            Secret Key
          </Label>
          <a href="/" className="flex items-center gap-1 hover:cursor-pointer">
            <div className="text-xs text-dark-secondary-blue underline underline-offset-4">
              Find your Secret Key
            </div>
            <LinkIcon
              className="text-light-primary-blue"
              width={16}
              height={16}
            />
          </a>
        </div>
        <Input
          className="mt-2 mb-4 rounded-md px-4 py-3 bg-white focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
          type="text"
          {...register("secretKey")}
        />
        <Label
          htmlFor="password"
          className="text-light-secondary-gray font-normal"
        >
          Password
        </Label>
        <Input
          className="mt-2 mb-4 rounded-md px-4 py-3 bg-white focus:outline-none focus:shadow-secondary-sky transition-shadow duration-300"
          type="password"
          {...register("password")}
        />
        <div className="flex items-center gap-3 pb-4">
          <Checkbox className="border-gray-400 data-[state=checked]:text-white data-[state=checked]:bg-light-primary-blue" />
          <span className="text-sm">This is a public or shared computer</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <Button
            type="submit"
            value="submit"
            className="rounded-3xl w-36 text-sm bg-light-blue hover:bg-light-primary-blue"
          >
            Sign In
          </Button>
          <a
            className="text-light-primary-blue text-sm font-[625] hover:underline"
            href="https://my.1password.com/support?a=&email="
          >
            Having trouble signing in?
          </a>
        </div>
        {error.length > 0 && <ErrorToast message={error} />}
      </form>
    </div>
  );
};

export default NewSignInForm;
