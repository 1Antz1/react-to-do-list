import React from "react";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ task }) => {
  return <div>{task.name}</div>;
};
export default TaskItem;
