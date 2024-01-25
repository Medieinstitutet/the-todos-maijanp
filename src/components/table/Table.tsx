import { ToDo } from "../../models/ToDo"
import { TableRow } from "../tableRow/TableRow"
import styles from './table.module.css'
interface ITableProps {
    tasks: ToDo[],
    onToggleStatus: (index: number) => void;
}
export const Table = ({tasks, onToggleStatus} : ITableProps) => {
    return (
       
            <div className={styles.container}>
                <h1>To Do</h1>
                        <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                        <th>Done?</th>
                    </tr>
                </thead>
                <tbody>
                {tasks.map((task, i) => (
                    <TableRow  key={i} theTask={task} i={i} onToggleStatus={onToggleStatus}/>
                ))}
                </tbody>
                        </table>
            </div>
        
    )
}