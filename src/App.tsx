import { useState } from "react";
import "./App.css";
import { AddTaskForm } from "./components/addTaskForm/AddTaskForm";
import { Table } from "./components/table/Table";
import { ToDo } from "./models/ToDo";

function App() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const initialTasks: ToDo[] = [
    new ToDo("Visit mom and dad", "28-01-24", 8, false),
    new ToDo("Finish painting", "28-02-24", 5, false),
    new ToDo("Apply for 10 internships", "28-02-24", 10, false),
    new ToDo("Finish this application", "26-01-24", 10, true),
    new ToDo("Go grocery shopping", "30-01-24", 7, false),
  ];

  const [tasks, setTasks] = useState<ToDo[]>(
    savedTasks.length > 0 ? savedTasks : initialTasks
  );
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("ascending");

  const sortTasks = () => {
    const newDirection =
      sortDirection === "ascending" ? "descending" : "ascending";
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.priority < b.priority) {
        return newDirection === "ascending" ? -1 : 1;
      } else if (a.priority > b.priority) {
        return newDirection === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setSortDirection(newDirection);
    setTasks(sortedTasks);
  };

  const addNewTask = (newTask: ToDo) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleTaskStatus = (i: number) => {
    const newTasks = [...tasks];
    newTasks[i].isDone = !newTasks[i].isDone;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <Table
        tasks={tasks}
        onToggleStatus={toggleTaskStatus}
        sortDirection={sortDirection}
        sortTasks={sortTasks}
        onDeleteTask={deleteTask}
      />
      <AddTaskForm onAddTask={addNewTask} />
    </>
  );
}

export default App;
