"use client";
import React, { useState } from "react";
import ToDoPopOver from "./components/ToDoPopOver";
import { format } from "date-fns";

type TodoType = {
  id: string;
  text: string;
  priority: string | null;
  date: Date | number;
  completed: boolean;
  createdAt: Date;
};

const ToDoList = () => {
  const [tasks, setTasks] = useState<TodoType[]>([]);
  const [text, setText] = useState<string>("");
  const [priority, setPriority] = React.useState<null | string>(null);
  const [date, setDate] = React.useState<Date | null>(null);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    addTask({
      id: "",
      text: text,
      priority: priority,
      date: date as Date,
      completed: false,
      createdAt: new Date(),
    });
    setText("");
    setPriority(null);
    setDate(null);
  };

  const addTask = (task: TodoType) => {
    if (text.length === 0) {
      return;
    } else {
      setTasks([task, ...tasks]);
    }
  };

  console.log(tasks, "tasks", text, "text", priority, "priority", date, "date");

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
        />
      </div>
      {tasks.map((task) => (
        <div className="flex flex-row items-center" key={task.id}>
          {task.text}
          {task.priority}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
