import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const displayTask = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onDeleteTask={onDelete}
      />
    );
  });

  return <div className="tasks">{displayTask}</div>;
}

export default TaskList;
