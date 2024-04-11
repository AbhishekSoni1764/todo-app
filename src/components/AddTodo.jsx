// import { useState } from "react"

import { useContext, useRef } from "react"
import { TaskItemContext } from "../store/Todo-items-context"

/* eslint-disable react/prop-types */
export default function AddTodo() {

    //USESTATE USAGE
    // const [name, setTaskName] = useState("")
    // const [dueDate, setDueDate] = useState("")

    // function handleAddClicked() {
    //     handleAdd(name, dueDate)
    //     setTaskName("")
    //     setDueDate("")
    // }

    const { handleAdd } = useContext(TaskItemContext)

    //useRef USAGE
    const taskNameElement = useRef()
    const dueDateElement = useRef()

    function handleSubmit() {
        const name = taskNameElement.current.value
        const dueDate = dueDateElement.current.value
        taskNameElement.current.value = ""
        dueDateElement.current.value = ""
        handleAdd(name, dueDate)
    }


    return (
        <div className="container text-center">
            {/* <div className="row kg-row"> using useState */}
            <form className="row kg-row" onSubmit={handleSubmit}>
                <div className="col-6">
                    {/* <input type="text" className="input" value={name} placeholder="Enter Todo Here" onChange={(event) => setTaskName(event.target.value)} /> */}
                    <input type="text" className="input" placeholder="Enter Todo Here" ref={taskNameElement} />
                </div>
                <div className="col-4">
                    {/* <input type="date" className="input" value={dueDate} onChange={(event) => setDueDate(event.target.value)} /> */}
                    <input type="date" className="input" ref={dueDateElement} />
                </div>
                <div className="col-2">
                    {/* <button type="button" className="btn btn-success kg-button" onClick={handleAddClicked}> */}
                    <button type="submit" className="btn btn-success kg-button">
                        Add
                    </button>
                </div>
            </form>
            {/* </div> */}
        </div>
    )
}