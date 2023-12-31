import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import React from "react";

interface HeaderProps {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: (location: string) => void;
  setCelsius: (celsius: boolean) => void;
  celsius: boolean;
}

const InputSearch = ({
  handleSearch,
  setLocation,
  setCelsius,
  celsius,
}: HeaderProps) => {
  return (
    <div className="flex flex-row items-center w-full pb-6 space-x-2">
      <Input
        className="w-full bg-card rounded-xl text-xs"
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
  );
};

export default InputSearch;
