import { useState, useRef, useContext, useEffect } from "react";
import TasksContext from "../services/TasksContext";
import TimeContext from "../services/TimeContext";
import { Button, TextField, NativeSelect } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Title from "./Title";

const TasksForm = () => {
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([])
    const { setActiveTask } = useContext(TasksContext)
    const { isRunning } = useContext(TimeContext)
    const ref = useRef()
    let i = 0

    useEffect(() => {
        if (localStorage.getItem('tasks')) {
            const tasksLS = JSON.parse(localStorage.getItem('tasks'))
            setTasks(tasksLS)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!tasks.includes(task)) {
            setTasks([...tasks, task])
        }
        ref.current.value = ""
    }

    const handleInputChange = (e) => {
        setTask(e.target.value)
    }

    const handleSelectChange = (e) => {
        setActiveTask(e.target.value)
    }


    return (
        <>
            <Title text="Add task &#128071;" />
            <form onSubmit={handleFormSubmit} style={{ display: "grid", maxWidth: "30%", margin: "0 auto 20px" }}>
                <TextField type="text" onChange={handleInputChange} inputRef={ref} label="My great task is..." variant="outlined" />
                <Button type="submit" variant="contained" title="Save task"> <AddTaskIcon /></Button>
            </form>
            <Title text="Select task &#128071;" />
            <NativeSelect
                variant='outlined'
                onChange={handleSelectChange}
                disabled={isRunning}
                title="Select task"
                style={{ marginBottom: "20px", width: "30%" }}>
                {tasks.map(task => <option value={task} key={i++}>{task}</option>)}
            </NativeSelect>


        </>)
}

export default TasksForm