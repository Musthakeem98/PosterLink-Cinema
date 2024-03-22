"use client";

import Logo from "@/../public/assets/navbar-logo.png";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import PlusIcon from "@/../public/assets/icons/plus.svg";
import { useState } from "react";

export default function NavBase(): JSX.Element {
  const navigation = [
    { name: "HOME", href: "/" },
    { name: "OUR SCREENS", href: "/faq" },
    { name: "SCHEDULE", href: "#pricing" },
    { name: "MOVIE LIBRARY", href: "#" },
    { name: "LOCATION & CONTACT", href: "/#footer" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="
      absolute inset-x-0 top-0 z-50
      px-6 py-9
      md:px-16 md:py-10
      xl:px-28 xl:py-10
      w-full
      pointer-events-none
      bg-nev-bar-clr
    "
    >
      <nav
        className="flex items-center justify-between bg-nev-bar-clr"
        aria-label="Global"
      >
        <div className="pointer-events-auto">
          <a href="/" className="-m-1.5 p-1.5">
            <img src="/assets/navbar-logo.png" alt="" />
          </a>
        </div>
        <div className="flex md:hidden pointer-events-auto">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="24" height="4" rx="2" fill="#fff" />
              <rect y="8.5" width="24" height="4" rx="2" fill="#fff" />
              <rect y="16.5" width="24" height="4" rx="2" fill="#fff" />
            </svg>
          </button>
        </div>
        <div
          className="
          hidden md:flex
          gap-x-4 md:gap-x-4 xl:gap-x-12
          items-center
          pointer-events-auto
          font-sans
        "
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
              text-white
              hover:text-white/80 
              hover:underline
              text-base
              font-normal
              md:text-xs    
              lg:text-base  
            "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only">Your Company</span>
              <Image
                src={Logo}
                className="h-8  w-auto"
                alt="No Loop Tech logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md py-2.5 px-0 text-white"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only">Close menu</span>
              {/* <PlusIcon className="rotate-45" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/20 transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
