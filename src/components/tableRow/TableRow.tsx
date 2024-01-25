import { ToDo } from "../../models/ToDo";
import styles from "./TableRow.module.css";
interface ITableRowProps {
  theTask: ToDo;
  i: number;
  onToggleStatus: (index: number) => void;
}

export const TableRow = ({
  theTask: { task, priority, deadline, isDone },
  i,
  onToggleStatus,
}: ITableRowProps) => {
  const handleClick = () => {
    onToggleStatus(i);
  };

  return (
    <>
      <tr className={styles.row}>
        <td>{task}</td>
        <td>{priority}</td>
        <td>{deadline}</td>
        <td className={styles.statusCol}>
          {" "}
          <button
            className={`${styles.button} ${
              isDone ? styles.done : styles.notDone
            }`}
            onClick={handleClick}
          >
            {isDone ? "Yep!" : "Nope!"}
          </button>
        </td>
      </tr>
    </>
  );
};
