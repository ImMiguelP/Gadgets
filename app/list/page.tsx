import React from "react";
import ToDoPopOver from "./components/ToDoPopOver";

const ToDoList = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="font-bold text-xl pb-5">Your Task List</h1>
      <div className="flex flex-row items-center">
        <h2 className="font-bold">Tasks</h2>
        <ToDoPopOver />
      </div>
    </div>
  );
};

export default ToDoList;
