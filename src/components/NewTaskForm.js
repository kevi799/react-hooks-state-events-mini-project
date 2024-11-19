import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setnewTask] = useState({
    text: "Pass the tests",
    category: "Code",
  });

  const newCategory = categories.filter((category) => category !== "All");
  const categoryOptions = newCategory.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  function handleOnChange(e) {
    setnewTask({ ...newTask, [e.target.value]: e.target.value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleOnSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleOnChange} />
      </label>
      <label>
        Category
        <select name="category">{categoryOptions}</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
