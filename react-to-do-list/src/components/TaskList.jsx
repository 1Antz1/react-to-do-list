import React from "react";

// component import
import TaskItem from "./TaskItem.jsx";

//styles
import styles from "./TaskList.module.css";

export const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
