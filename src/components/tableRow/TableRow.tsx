import { useState } from "react";
import { ToDo } from "../../models/ToDo"
import styles from './TableRow.module.css'
interface ITableRowProps {
    theTask: ToDo;
}

export const TableRow = ({theTask: {task, priority, deadline, isDone }, 
}: ITableRowProps) => {

    const [status, setStatus] = useState(isDone)

    const handleClick =()=> {
        if(status) {
            setStatus(false)
        } else{setStatus(true)}
        
    }
    return (
        <>
        <tr>
            <td>{task}</td>
            <td>{priority}</td>
            <td>{deadline}</td>
            <td className={status ? styles.done : styles.notDone}> <button onClick={handleClick}>{status ? "Undo task" : "Mark as done"}</button></td>
        </tr>
        </>
    )
}