import React, { createContext } from "react";
import { useReducer } from "react";
import { taskReducer } from "../reducer/task";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatchTaskAction] = useReducer(taskReducer);
  return (
    <TaskContext.Provider value={{ tasks, dispatchTaskAction }}>
      {children}
    </TaskContext.Provider>
  );
};
