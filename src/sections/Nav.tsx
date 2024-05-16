import { Disclosure } from "@headlessui/react";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ButtonLink from "../components/ButtonLink";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Partners",
      href: "#partners",
    },
    {
      name: "Reviews",
      href: "#reviews",
    },
  ];

  const navLinkClass = "text-gray-500 hover:text-gray-900 active:text-gray-400";

  return (
    <Disclosure as="nav">
      <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:m-auto">
        <div className="flex items-center justify-start space-x-4">
          <ButtonLink href="#">
            <img src={Kobodrop} alt="kobodrop logo" />
          </ButtonLink>
          <div className="lg:ml-8lg:space-x-8 hidden items-center space-x-4 sm:ml-6 sm:flex">
            {navLink.map((link) => (
              <ButtonLink
                key={link.name}
                href={link.href}
                className={navLinkClass}
              >
                {link.name}
              </ButtonLink>
            ))}
          </div>
        </div>
        <div>
          <ButtonLink
            href="https://play.google.com"
            target="_blank"
            className="hidden rounded-xl bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
          >
            Install Kobodrop
          </ButtonLink>
          <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
            {isOpen ? (
              <XMarkIcon
                className="block h-6 w-6"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <Bars3Icon
                className="block h-6 w-6"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </Disclosure.Button>
        </div>
      </div>
      <Disclosure.Panel className="mx-5 space-y-2 px-4 sm:hidden">
        {navLink.map((link) => (
          <Disclosure.Button
            key={link.name}
            as="a"
            href={link.href}
            className={
              "block rounded bg-gray-300 px-4 py-2 no-underline hover:underline"
            }
          >
            {link.name}
          </Disclosure.Button>
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
}
