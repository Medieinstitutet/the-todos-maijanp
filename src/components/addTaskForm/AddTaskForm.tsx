import { ChangeEvent, useState } from "react";
import { ToDo } from "../../models/ToDo";

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
    onAddTask(task);
    setTask(new ToDo("", "", 0, false));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          value={task.task}
        />
        <label htmlFor="dueDate">Due Date</label>
        <input
          onChange={handleChange}
          type="text"
          name="deadline"
          value={task.deadline}
        />
        <label htmlFor="priority">Priority</label>
        <input
          onChange={handleChange}
          type="text"
          name="priority"
          value={task.priority}
        />
        <button type="submit">Create task</button>
      </form>
    </>
  );
};
