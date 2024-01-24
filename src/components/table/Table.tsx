import { ToDo } from "../../models/ToDo"
import { TableRow } from "../tableRow/TableRow"
import styles from './table.module.css'
interface ITableProps {
    tasks: ToDo[]
}
export const Table = (props:ITableProps) => {
    return (
        <>
            <h1>To Do</h1>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
            {props.tasks.map((task, i) => (
                <TableRow key={i} theTask={task}/>
            ))}
            </tbody>
        </table>
        </>
    )
}