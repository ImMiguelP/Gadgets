"use client";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavBar() {
  return (
    <div className="w-full">
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
