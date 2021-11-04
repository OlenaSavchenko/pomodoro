import TasksContext from "../services/TasksContext";
import { useContext } from 'react';
import { Box } from "@mui/material";
import Title from "../components/Title";
import HistoryStats from "../components/HistoryStats";

const History = () => {
    const { history } = useContext(TasksContext)
    return (
        <Box textAlign='center'>
            {history.length
                ? <Title text={`Creat job! See all your pomodoro tasks (${history.length})`} />
                : <Title text="You haven`t completed tasks. Try Pomodoro Tracker at Homepage &#128579;" />}
            <HistoryStats />
        </Box>

    )
}


export default History;