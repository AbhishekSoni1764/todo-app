/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

export const TaskItemContext = createContext({
    taskList: [],
    handleAdd: () => { },
    handleDelete: () => { },
})

const taskItemReducer = (currTaskList, action) => {

    let newTaskList = currTaskList
    if (action.type === "ADD_TASK") {
        newTaskList = [...currTaskList,
        {
            taskName: action.payload.name,
            taskDueDate: action.payload.dueDate,
        },
        ]
    } else if (action.type === "DELETE_TASK") {
        newTaskList = currTaskList.filter(task => task.taskName !== action.payload.taskName)
    }
    return newTaskList
}

const TaskItemContextProvider = ({ children }) => {
    // const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    const [taskList, dispatchTaskList] = useReducer(taskItemReducer, JSON.parse(localStorage.getItem('tasks')) || [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }, [taskList]);

    function handleAdd(name, dueDate) {

        const newTaskItem = {
            type: "ADD_TASK",
            payload: {
                name,
                dueDate
            }
        }
        dispatchTaskList(newTaskItem)

        // const newTasks = [...taskList,
        // {
        //   taskName: name,
        //   taskDueDate: dueDate,
        // }
        // ]
        // setTaskList(newTasks)
    }

    function handleDelete(taskName) {

        const deleteTaskAction = {
            type: "DELETE_TASK",
            payload: {
                taskName
            },
        }
        dispatchTaskList(deleteTaskAction)

        // const newTasks = taskList.filter(task => task.taskName !== taskName)
        // setTaskList(newTasks)
    }

    return (
        <TaskItemContext.Provider
            value={
                {
                    taskList: taskList,
                    handleAdd: handleAdd,
                    handleDelete: handleDelete,
                }
            }>
            {children}
        </TaskItemContext.Provider>
    )
};

export default TaskItemContextProvider;