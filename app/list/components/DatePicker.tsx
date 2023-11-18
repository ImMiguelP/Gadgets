import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../src/components/ui/popover";
import { Button } from "../../src/components/ui/button";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { Calendar } from "../../src/components/ui/calendar";
import { format } from "date-fns";

type DatePickerProps = {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

const DatePicker = ({ date, setDate }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="text-xs w-[230px]">
          <CalendarIcon className="mr-2 h-4 w-4 text-xs" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-xs">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date || undefined} // undefined is required for the calendar to be uncontrolled
          onSelect={(day: Date | undefined) => setDate(day || null)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
