import { useContext } from "react"
import { TaskItemContext } from "../store/Todo-items-context"

export default function MessageDisplay() {
    const { taskList } = useContext(TaskItemContext)

    return (
        taskList.length === 0 && <h1 className='text-init text-center'>{"Add New Todo's"}</h1>
    )
}