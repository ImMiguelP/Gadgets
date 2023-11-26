"use client";
import React, { useState } from "react";
import ToDoPopOver from "./components/ToDoPopOver";
import TaskTable from "./components/TaskTable";
import { TodoType } from "../../types";
import DataTableDemo from "./components/test";

const ToDoList = () => {
  const [tasks, setTasks] = useState<TodoType[]>([]);
  const [text, setText] = useState<string>("");
  const [priority, setPriority] = React.useState<null | string>(null);
  const [date, setDate] = React.useState<Date | null>(null);
  const [closePopover, setClosePopover] = React.useState<boolean>(false);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    addTask({
      id: "",
      text: text,
      priority: priority as string,
      date: date as Date,
      completed: false,
      createdAt: new Date(),
    });
    setText("");
    setPriority(null);
    setDate(null);
    setClosePopover(false);
  };

  const addTask = (task: TodoType) => {
    if (text.trim().length === 0 || priority === null || date === null) {
      return;
    } else {
      setTasks([task, ...tasks]);
    }
  };

  return (
    <div className="flex flex-col p-6">
      <h1 className="font-bold text-xl pb-5">Your Task List</h1>
      <div className="flex flex-row items-center">
        <h2 className="font-bold">Tasks</h2>
        <ToDoPopOver
          text={text}
          setText={setText}
          priority={priority}
          setPriority={setPriority}
          date={date}
          setDate={setDate}
          handleSubmit={handleSubmit}
          closePopover={closePopover}
          setClosePopover={setClosePopover}
        />
      </div>
      {/* <TaskTable tasks={tasks} /> */}
      <DataTableDemo tasks={tasks} />
    </div>
  );
};

export default ToDoList;
