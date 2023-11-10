import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import React, { useState } from "react";

interface HeaderProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: (location: string) => void;
  setCelsius: (celsius: boolean) => void;
  celsius: boolean;
}

const Header = ({
  handleSearch,
  setLocation,
  setCelsius,
  celsius,
}: HeaderProps) => {
  return (
    <>
      <div className="flex flex-row items-center w-full space-x-2">
        <Input
          className="w-full xl:w-6/12 bg-card rounded-xl text-xs"
          placeholder="Search for cities"
          onKeyDown={handleSearch}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="flex">
          <Button
            onClick={() => {
              setCelsius(!celsius);
            }}
            variant="outline"
            size="icon"
            className="bg-card text-secondary-foreground rounded-xl hover:bg-stone-500 "
          >
            {celsius ? (
              <TbTemperatureCelsius className="h-4 w-4" />
            ) : (
              <TbTemperatureFahrenheit className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      <div className="pt-5 flex flex-row w-full items-center justify-between"></div>
    </>
  );
};

export default Header;
