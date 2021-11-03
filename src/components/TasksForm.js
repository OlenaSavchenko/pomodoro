import { useState, useRef, useContext, useEffect } from "react";
import TasksContext from "../services/TasksContext";
import TimeContext from "../services/TimeContext";
import { Button, TextField, MenuItem } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Title from "./Title";

const TasksForm = () => {
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([])
    const { setActiveTask } = useContext(TasksContext)
    const { isRunning } = useContext(TimeContext)
    const ref = useRef()
    let i = 1

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
            <TextField
                defaultValue={""}
                select
                variant='outlined'
                onChange={handleSelectChange}
                disabled={isRunning}
                title="Select task"
                helperText="Once you choose task, you can start timer."
                style={{ marginBottom: "20px", width: "30%" }}
            >
                {tasks.map(task => <MenuItem value={task} key={i++}>{task}</MenuItem>)}
            </TextField>


        </>)
}

export default TasksForm