"use client";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <div className="w-full">
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
