"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import { navContact, navPages } from "./NavObjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const MobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="w-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex ">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1 ">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5 ">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-secondary"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card text-secondary-foreground px-6">
                  <div className="flex h-16 shrink-0 items-center">Logo</div>

                  <nav className="flex flex-1 flex-col">
                    <ul
                      role="list"
                      className="flex flex-1 flex-col gap-y-7 -mx-7"
                    >
                      <li>
                        <ul role="list" className="space-y-1">
                          {navPages.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <div
                                className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                            ${
                              pathname === item.href
                                ? " bg-gradient-to-r from-gray-300/50 to-card text-secondary-foreground"
                                : " hover:bg-gradient-to-r from-gray-300/50 to-card"
                            }`}
                              >
                                <item.icon
                                  className="text-secondary-foreground ml-5 h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-secondary-foreground/80 ml-5">
                          Contact Me
                        </div>
                        <ul role="list" className="mt-2 space-y-1">
                          {navContact.map((contact) => (
                            <li key={contact.name}>
                              <a
                                href={contact.href}
                                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-gradient-to-r from-gray-300/50 to-card"
                              >
                                <contact.icon
                                  className="ml-5 h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {contact.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div>
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  bg-card lg:bg-background px-4 shadow-sm sm:gap-x-6 sm:p-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="w-full flex justify-end">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
