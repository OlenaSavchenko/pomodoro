import { useContext } from "react";
import TasksContext from "../services/TasksContext";
import TimeContext from "../services/TimeContext";
import { Button, ButtonGroup, Container, Typography, Box } from "@mui/material";
import { formatTime } from "../share/formatTime"

const Timer = () => {
    const { time, start, stop, reset, isRunning } = useContext(TimeContext)
    const { activeTask } = useContext(TasksContext)
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60


    return (
        <Container maxWidth="sm">
            <Typography variant="h1" component="h2" color="primary" style={{ textAlign: "center" }}>
                <span>{formatTime(minutes)}: </span>
                <span>{formatTime(seconds)}</span>
            </Typography>
            <Box textAlign='center' style={{ marginBottom: "20px" }}>
                <ButtonGroup variant="contained" aria-label="timer buttons">
                    <Button type="button" onClick={start} disabled={isRunning || !activeTask} title="Start Pomodoro Tracker">Start</Button>
                    <Button type="button" onClick={reset} title="Reset Pomodoro Tracker">Reset</Button>
                    <Button type="button" onClick={stop} disabled={!isRunning} title="Pause Pomodoro Tracker">Pause</Button>
                </ButtonGroup>
            </Box>
        </Container >
    )
}

export default Timer