import { useState } from "react";
import "./App.css";
import { AddTaskForm } from "./components/addTaskForm/AddTaskForm";
import { Table } from "./components/table/Table";
import { ToDo } from "./models/ToDo";


function App() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const initialTasks: ToDo[] = [
    new ToDo("Relax", "Never", 10, false),
    new ToDo("Finish painting", "28-02-24", 5, false),
    new ToDo("Apply for 10 internships", "28-02-24", 10, false),
    new ToDo("Finish this application", "26-01-24", 10, false),
  ];

  const [tasks, setTasks] = useState<ToDo[]>(
    savedTasks.length > 0 ? savedTasks : initialTasks
  );
const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('ascending')
  
const sortTasks = () => {
    let sortedTasks = [...tasks];
    sortedTasks.sort((a, b) => {
      if (a.priority < b.priority) {
        return sortDirection === "ascending" ? -1 : 1;
      } else if (a.priority > b.priority) {
        return sortDirection === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setTasks(sortedTasks);
  };

  const switchSortDirection = () => {
    setSortDirection(lastDirection => lastDirection === 'ascending' ? 'descending' : 'ascending')
    sortTasks()
  }

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
  return (
    <>
      <Table
        tasks={tasks}
        onToggleStatus={toggleTaskStatus}
        switchSortDirection={switchSortDirection}
        sortDirection={sortDirection}
      />
      <AddTaskForm onAddTask={addNewTask} />
    </>
  );
}

export default App;
