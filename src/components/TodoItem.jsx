import { useContext } from "react"
import { TaskItemContext } from "../store/Todo-items-context"


/* eslint-disable react/prop-types */
export default function TodoItem({ taskName, taskDueDate }) {

    const { handleDelete } = useContext(TaskItemContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">{taskName}</div>
                <div className="col-4">{taskDueDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger kg-button" onClick={() => handleDelete(taskName)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}