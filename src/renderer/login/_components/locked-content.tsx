import React from "react";
import { ComboboxLocale } from "./combobox-locale";
import Spinner from "@components/common/spinner";
import NewSignInForm from "./new-signin-form";
import InitalForm from "./inital-form";
import useFormStore from "@stores/formStore";

const FOOTER_ITEMS = [
  {
    text: "Find my account ",
    href: "https://my.1password.com/support",
  },
  {
    text: "Have a team account? ",
    href: "https://start.1password.com/signin/team?l=en",
  },
  {
    text: "Create a new account ",
    href: "https://1password.com/sign-up/",
  },
];

const SMALL_ITEMS = [
  {
    text: "Version 1883",
    href: "https://app-updates.agilebits.com/product_history/B5",
    spanText: " — © 2024 ",
  },
  {
    text: "1Password",
    href: "https://1password.com",
    spanText:
      ". All rights reserved. 4711 Yonge St, 10th Floor, Toronto, Ontario, M2N 6K8, Canada.",
  },
];

const LockedContent = () => {
  const formStore = useFormStore();

  return (
    <div className="pt-[22vh] max-w-[420px] flex flex-grow flex-col w-auto  mr-16 items-start p-0">
      {formStore.newFormEnabled ? (
        <NewSignInForm />
      ) : !formStore.isLoading ? (
        <InitalForm />
      ) : (
        <Spinner className="mt-6 mb-3" />
      )}

      <footer className="mt-12">
        <ComboboxLocale />
        <div className="mt-12">
          {FOOTER_ITEMS.map((item, index) => {
            return (
              <span key={index}>
                <a
                  href={item.href}
                  className="text-blue-600 text-sm font-medium"
                >
                  {item.text}
                </a>
                {index !== FOOTER_ITEMS.length - 1 && (
                  <span>
                    <span>&#x2022; </span>
                  </span>
                )}
              </span>
            );
          })}
        </div>
        <small className="text-[10px] leading-4">
          {SMALL_ITEMS.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className="text-blue-600"
              >
                {item.text} <span className="text-black">{item.spanText}</span>
              </a>
            );
          })}
        </small>
      </footer>
    </div>
  );
};

export default LockedContent;
