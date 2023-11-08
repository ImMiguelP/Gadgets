"use client";
import React from "react";
import { navContact, navPages } from "./NavObjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:inset-y-0 lg:z-20 lg:flex lg:w-72 lg:flex-col text-primary-foreground">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-primary/10 bg-primary/90 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">Logo</div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7 -mx-7 ">
            <li>
              <ul role="list" className="space-y-1">
                {navPages.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <div
                      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                    ${
                      pathname === item.href
                        ? " bg-gradient-to-r from-gray-300/50 to-primary/60 text-primary-foreground"
                        : " hover:bg-gradient-to-r from-gray-300/50 to-primary/60"
                    }`}
                    >
                      <item.icon
                        className="text-primary-foreground ml-5 h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-primary-foreground/80 ml-5">
                Contact Me
              </div>
              <ul role="list" className="mt-2 space-y-1">
                {navContact.map((contact) => (
                  <li key={contact.name}>
                    <a
                      href={contact.href}
                      className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-gradient-to-r from-gray-300/50 to-primary/60"
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
    </div>
  );
};

export default DesktopNav;
