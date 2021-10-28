import { useContext } from "react";
import { Time } from "../App"


const Timer = () => {
    const time = useContext(Time)
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    return (
        <div>
            <span>{minutes}:</span>
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            <button>Start</button>
            <button>Reset</button>
            <button>Pause</button>
        </div>
    )
}

export default Timer