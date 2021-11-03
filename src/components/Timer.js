import { useContext } from "react";
import { TimeContext, TasksContext } from "../App";


const Timer = () => {
    const { time, start, stop, reset, isRunning } = useContext(TimeContext)
    const { activeTask } = useContext(TasksContext)
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    const formatTime = value => value < 10 ? `0${value}` : value

    return (
        <div>
            <span>{formatTime(minutes)}: </span>
            <span>{formatTime(seconds)}</span>
            <button type="button" onClick={start} disabled={isRunning || !activeTask}>Start</button>
            <button type="button" onClick={reset}>Reset</button>
            <button type="button" onClick={stop} disabled={!isRunning}>Pause</button>
        </div>
    )
}

export default Timer