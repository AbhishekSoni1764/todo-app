/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TaskItemContext } from "../store/Todo-items-context";
export default function TodoList() {

    const { taskList } = useContext(TaskItemContext)

    return (
        <>
            {taskList.map(task => <TodoItem key={task.taskName} taskName={task.taskName} taskDueDate={task.taskDueDate} />)}
        </>
    )
}