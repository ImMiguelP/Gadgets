import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../src/components/ui/popover";
import { Button } from "../../../src/components/ui/button";
import { RxBadge } from "react-icons/rx";
import { Badge } from "../../../src/components/ui/badge";

type PriorityPickerProps = {
  priority: string | null;
  setPriority: React.Dispatch<React.SetStateAction<string | null>>;
};

const PriorityPicker = ({ priority, setPriority }: PriorityPickerProps) => {
  const handleBadgeClick = (selectedPriority: string) => {
    setPriority(selectedPriority);
  };

  const BadgeOption = ({ priority }: { priority: string }) => {
    const priorityColors: { [key: string]: string } = {
      High: "red",
      Normal: "yellow",
      Low: "green",
    };

    let color = priorityColors[priority];

    return (
      <Badge
        className={`bg-${color}-600 rounded-xl hover:cursor-pointer hover:bg-${color}-400`}
        onClick={() => handleBadgeClick(priority)}
      >
        {priority}
      </Badge>
    );
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="text-xs w-[230px]">
          <RxBadge className="mr-2 h-6 w-6 text-xs" />
          {priority ? (
            <BadgeOption priority={priority} />
          ) : (
            <span className="text-xs">Pick priority</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto h-[80px]" align="start">
        <div className="space-x-6">
          <BadgeOption priority="High" />
          <BadgeOption priority="Normal" />
          <BadgeOption priority="Low" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PriorityPicker;
