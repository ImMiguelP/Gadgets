import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../src/components/ui/popover";
import { Button } from "../../src/components/ui/button";
import { format } from "date-fns";
import { RxBadge } from "react-icons/rx";
import { Badge } from "../../src/components/ui/badge";

const PriorityPicker = () => {
  const [priority, setPriority] = React.useState<null | string>(null);

  const handleBadgeClick = (selectedPriority: string) => {
    setPriority(selectedPriority);
  };

  const BadgeOption = ({
    priority,
    color,
  }: {
    priority: string;
    color: string;
  }) => (
    <Badge
      className={`${color}-600 rounded-xl hover:cursor-pointer hover:${color}-400`}
      onClick={() => handleBadgeClick(priority)}
    >
      {priority}
    </Badge>
  );

  const getBadgeColor = () => {
    if (priority === "High") {
      return "bg-red-600";
    } else if (priority === "Normal") {
      return "bg-yellow-600";
    } else if (priority === "Low") {
      return "bg-green-600";
    } else {
      return "";
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="text-xs w-[230px]">
          <RxBadge className="mr-2 h-6 w-6 text-xs" />
          {priority ? (
            <Badge className={`${getBadgeColor()} rounded-xl`}>
              {priority}
            </Badge>
          ) : (
            <span className="text-xs">Pick priority</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto h-[80px]" align="start">
        <div className="space-x-6">
          <BadgeOption priority="High" color="bg-red" />
          <BadgeOption priority="Normal" color="bg-yellow" />
          <BadgeOption priority="Low" color="bg-green" />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PriorityPicker;
