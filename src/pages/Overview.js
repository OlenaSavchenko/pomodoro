import { Box } from "@mui/material";
import Title from "../components/Title";
import OverviewStats from "../components/OverviewStats";
import TasksContext from "../services/TasksContext";
import { useContext } from 'react';

const Overview = () => {
    const { history } = useContext(TasksContext)
    return (
        <Box textAlign='center'>
            {history.length
                ? <Title text="Some more statistic about your Pomodoro success &#128521;" />
                : <Title text="We have not statistic data yet &#129488;" />}

            <OverviewStats />
        </Box>
    )
}

export default Overview