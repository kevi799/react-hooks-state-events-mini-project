import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function onDelete(deleteTask) {
    const taskLst = tasks.filter((task) => {
      return task.text !== deleteTask;
    });
    setTasks(taskLst);
  }
  function addedTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const displayTasks = tasks.filter((task) => {
    return category === "All" ? true : task.category === category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onCategoryClick={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addedTask} />
      <TaskList tasks={displayTasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
