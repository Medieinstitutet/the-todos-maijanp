import { ToDo } from "../../models/ToDo"
import { TableRow } from "../tableRow/TableRow"

interface ITableProps {
    tasks: ToDo[]
}
export const Table = (props:ITableProps) => {
    const tableRows = props.tasks.map((aTask, i) => {
        return <TableRow key={i} theTask={aTask}/>
    })

    return (
        <>
            <h1>To Do</h1>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Done</th>
                </tr>
            </thead>

            <tbody>
            {tableRows}
            </tbody>
        </table>
        </>
    )
}