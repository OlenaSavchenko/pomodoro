import { useState } from "react";
import { useContext } from "react";
import { TasksContext, TimeContext } from "../App"

const TasksForm = () => {
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([])

    const { setActiveTask } = useContext(TasksContext)
    const { isRunning } = useContext(TimeContext)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, task])
    }

    const handleInputChange = (e) => {
        setTask(e.target.value)
    }

    const handleChange = (e) => {
        setActiveTask(e.target.value)
    }
    const options = tasks.map((task, index) => <option value={task} key={index}>{task}</option>)

    return (
        <>
            <h2>Add task</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange} />
                <button type="submit"> Add</button>
                <select onChange={handleChange} disabled={isRunning}>
                    {options}
                </select>
            </form>

        </>)
}

export default TasksForm