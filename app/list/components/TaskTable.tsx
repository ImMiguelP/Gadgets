import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import React from "react";

const TaskTable = ({ tasks }) => {
  const BadgeOption = ({ priority }: { priority: string }) => {
    const priorityColors: { [key: string]: string } = {
      High: "red",
      Normal: "yellow",
      Low: "green",
    };

    const color = priorityColors[priority];
    console.log("Selected Color:", color);

    return <Badge className={`bg-${color}-600 rounded-xl`}>{priority}</Badge>;
  };

  return (
    <Table>
      <TableCaption>A list of all your tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Tasks</TableHead>
          <TableHead>Priority</TableHead>

          <TableHead className="text-right">Deadline</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="text-primary">
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">{task.text}</TableCell>
            <TableCell>
              <BadgeOption priority={task.priority} />
            </TableCell>
            <TableCell className="text-right">
              {format(task.date, "PPP")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TaskTable;
