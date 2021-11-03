import { useContext, useRef } from "react";
import TimeContext from "../services/TimeContext";
import { Button, TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const SetTimeForm = () => {
    const { setTime } = useContext(TimeContext)
    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const timeValue = +ref.current.value
        if (timeValue > 0 && !isNaN(timeValue)) {
            setTime(timeValue * 60)
        }
        ref.current.value = ""
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center" }}>
            <TextField type="number" inputRef={ref} label="Set time (minutes)" variant="outlined" />
            <Button type="submit" variant="contained" title="Change task`s time"><AddCircleOutlineIcon /></Button>
        </form>
    )
}

export default SetTimeForm