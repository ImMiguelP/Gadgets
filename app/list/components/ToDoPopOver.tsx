"use client";

import { Button } from "../../../src/components/ui/button";
import { Input } from "../../../src/components/ui/input";
import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../src/components/ui/popover";
import { Label } from "../../../src/components/ui/label";
import DatePicker from "./DatePicker";
import PriorityPicker from "./PriorityPicker";
import { TaskPopover } from "../../../types";

const ToDoPopOver = ({
  text,
  setText,
  priority,
  setPriority,
  date,
  setDate,
  handleSubmit,
  closePopover,
  setClosePopover,
}: TaskPopover) => {
  return (
    <Popover open={closePopover}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          className="text-xs text-primary/60 underline"
          onClick={() => setClosePopover(true)}
        >
          Add a Task
          <PlusIcon className="h-4 w-4 ml-2 underline" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-100 max-w-sm lg:ml-[200px] rounded-xl bg-card">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add a Task</h4>
            <p className="text-sm text-muted-foreground">
              Set the details for the task.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Task Name</Label>
              <Input
                id="name"
                type="text"
                value={text}
                placeholder="Your task"
                className="col-span-2 h-8"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="status">Priority</Label>
              <PriorityPicker priority={priority} setPriority={setPriority} />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="date">Deadline</Label>
              <DatePicker date={date} setDate={setDate} />
            </div>
          </div>
          <Button
            variant="default"
            className="w-full bg-primary/80 rounded-xl"
            onClick={handleSubmit}
            disabled={
              text.trim().length === 0 || priority === null || date === null
            }
          >
            Add Task
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ToDoPopOver;
