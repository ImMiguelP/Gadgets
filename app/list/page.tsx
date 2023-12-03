"use client";
import React, { useEffect, useState } from "react";
import ToDoPopOver from "./components/ToDoPopOver";
import { TodoType } from "../../types";
import TaskTable from "./components/TaskTable";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [tasks, setTasks] = useState<TodoType[]>([]);
  const [text, setText] = useState<string>("");
  const [priority, setPriority] = React.useState<null | string>(null);
  const [date, setDate] = React.useState<Date | null>(null);
  const [closePopover, setClosePopover] = React.useState<boolean>(false);
  const createId = uuidv4();

  useEffect(() => {
    let todoItems = localStorage.getItem("MyTodos");

    if (todoItems) {
      setTasks(JSON.parse(todoItems));
    }
  }, []);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("MyTodos", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    addTask({
      id: createId,
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

  const delTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
    localStorage.setItem("MyTodos", JSON.stringify(filteredTasks));
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
      <TaskTable tasks={tasks} setTasks={setTasks} delTask={delTask} />
    </div>
  );
};

export default ToDoList;
