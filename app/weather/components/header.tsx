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
  const [isInputVisible, setInputVisible] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center w-full space-x-2 ">
        <Button
          onClick={() => {
            setInputVisible(!isInputVisible);
          }}
          variant="outline"
          size="icon"
          className="bg-[#f3f6fb] text-primary rounded-xl hover:bg-primary/80 hover:text-primary-foreground"
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
        </Button>
        <div
          style={{
            width: isInputVisible ? "100%" : "0",
            overflow: "hidden",
            transition: "width 0.3s ease-in-out",
          }}
        >
          <Input
            className="w-full"
            onKeyDown={handleSearch}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <div className="pt-5 flex flex-row w-full items-center justify-between">
        <h1 className="text-xl font-semibold text-start">Weather Forecast</h1>
        <div className="flex">
          <Button
            onClick={() => {
              setCelsius(!celsius);
            }}
            variant="outline"
            size="icon"
            className="bg-[#f3f6fb] text-primary  hover:bg-primary hover:text-primary-foreground"
          >
            {celsius ? (
              <TbTemperatureCelsius className="h-4 w-4" />
            ) : (
              <TbTemperatureFahrenheit className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
