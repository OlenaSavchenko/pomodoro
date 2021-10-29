import { useContext } from "react";
import { TimeContext } from "../App"


const Timer = () => {
    const time = useContext(TimeContext)
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    const formatTime = value => value < 10 ? `0${value}` : value

    return (
        <div>
            <span>{formatTime(minutes)}: </span>
            <span>{formatTime(seconds)}</span>
            <button type="button">Start</button>
            <button type="button">Reset</button>
            <button type="button">Pause</button>
        </div>
    )
}

export default Timer