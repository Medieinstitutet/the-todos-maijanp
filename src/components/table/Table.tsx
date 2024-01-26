import { ToDo } from "../../models/ToDo";
import { TableRow } from "../tableRow/TableRow";
import styles from "./table.module.css";
import upArrow from "../../images/up.png";
import downArrow from "../../images/down.png";

interface ITableProps {
  tasks: ToDo[];
  onToggleStatus: (index: number) => void;
  sortTasks: () => void;
  sortDirection: "ascending" | "descending";
  onDeleteTask: (index: number) => void;
}
export const Table = ({
  tasks,
  onToggleStatus,
  sortDirection,
  sortTasks,
  onDeleteTask,
}: ITableProps) => {
  const sortIcon = sortDirection === "ascending" ? downArrow : upArrow;
  return (
    <div className={styles.container}>
      <h1>To Do</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Task</th>
            <th>
              Priority{" "}
              <img
                className={styles.icon}
                onClick={sortTasks}
                src={sortIcon}
                alt=""
              />
            </th>
            <th>Due Date</th>
            <th>Done?</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <TableRow
              key={i}
              theTask={task}
              i={i}
              onToggleStatus={onToggleStatus}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
