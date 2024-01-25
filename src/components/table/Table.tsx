import { ToDo } from "../../models/ToDo";
import { TableRow } from "../tableRow/TableRow";
import styles from "./table.module.css";
interface ITableProps {
  tasks: ToDo[];
  onToggleStatus: (index: number) => void;
  requestSort: (key: keyof ToDo) => void;
  imgUrl: string
}
export const Table = ({ tasks, onToggleStatus, requestSort, imgUrl}: ITableProps) => {
  return (
    <div className={styles.container}>
      <h1>To Do</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => requestSort("task")}>Task</th>
            <th>Priority <img className={styles.icon} onClick={() => requestSort("priority")} src={imgUrl} alt=""/></th>
            <th onClick={() => requestSort("deadline")}>Due Date</th>
            <th>  Done?</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <TableRow
              key={i}
              theTask={task}
              i={i}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </tbody>
      </table>
 </div>
  );
};
