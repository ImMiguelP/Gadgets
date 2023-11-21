"use client";
import React from "react";
import { navContact, navPages } from "./NavObjs";
import { MdWidgets } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-44 m-10 text-secondary-foreground h-[90vh]">
      <div className="flex grow flex-col gap-y-5 bg-card px-6 pb-4 rounded-3xl items-center">
        <div className="flex p-6 items-center text-center text-primary/80">
          <MdWidgets size="32px" />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7 -mx-6 ">
            <li>
              <ul role="list" className="space-y-1 ">
                {navPages.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <div
                      className={`flex flex-col items-center p-3 text-xs leading-6 font-semibold
                      ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-secondary-foreground/60 hover:text-primary"
                      }`}
                    >
                      <item.icon
                        className="h-5 w-5 shrink-0 mb-2"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                  </Link>
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
