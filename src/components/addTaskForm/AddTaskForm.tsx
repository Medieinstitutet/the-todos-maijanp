import { ChangeEvent, useState } from "react";
import { ToDo } from "../../models/ToDo";

import styles from "./AddTaskForm.module.css";

interface IAddTaskForm {
  onAddTask: (task: ToDo) => void;
}

export const AddTaskForm = ({ onAddTask }: IAddTaskForm) => {
  const [task, setTask] = useState<ToDo>(new ToDo("", "", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setTask({ ...task, [e.target.name]: e.target.value });
    } else if (e.target.type === "number") {
      setTask({ ...task, [e.target.name]: +e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.task != "" && task.deadline != "" && task.priority != 0) {
      onAddTask(task);
      setTask(new ToDo("", "", 0, false));
    } else {
      alert("All fields must be filled before adding task. Try again!");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="task">Task</label>
          <input
            onChange={handleChange}
            type="text"
            name="task"
            value={task.task}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="dueDate">Due Date (dd-mm-yy)</label>
          <input
            onChange={handleChange}
            type="text"
            name="deadline"
            value={task.deadline}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="priority">Priority (1-10)</label>
          <input
            onChange={handleChange}
            type="text"
            name="priority"
            value={task.priority}
          />
        </div>
        <button className={styles.button} type="submit">
          Create task
        </button>
      </form>
    </>
  );
};
