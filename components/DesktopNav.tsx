import React from "react";
import { navContact, navPages } from "./NavObjs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DesktopNav = () => {
  return (
    <div className="hidden lg:inset-y-0 lg:z-20 lg:flex lg:w-72 lg:flex-col ">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-primary bg-background px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">Logo</div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navPages.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-indigo-600"
                            : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Contact Me
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {navContact.map((contact) => (
                  <li key={contact.name}>
                    <a
                      href={contact.href}
                      className={classNames(
                        contact.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <contact.icon
                        className="text-gray-400 group-hover:text-primary h-6 w-6 shrink-0"
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
