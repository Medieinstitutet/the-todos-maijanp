import "./App.css";
import { Table } from "./components/table/Table";
import { ToDo } from "./models/ToDo";

function App() {
  const tasks: ToDo[] = [
    new ToDo("Relax", "Never", 10, false),
    new ToDo("Finish painting", "28-02-24", 5, false),
    new ToDo("Apply for 10 internships", "28-02-24", 10, false),
    new ToDo("Finish this application", "26-01-24", 10, false),
  ];
  return (
    <>
      <Table tasks={tasks} />
    </>
  );
}

export default App;
