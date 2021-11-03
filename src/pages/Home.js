import Timer from "../components/Timer";
import TasksForm from "../components/TasksForm";
import Title from "../components/Title";
import About from "../components/About/About";
import { Box } from "@mui/material";

const Home = () => {
    return (<>
        <Box textAlign='center'>
            <Title text="Hello &#9995;, select task and let`s start Pomodoro Tracker" />
            <Timer />
            <TasksForm />
        </Box>
        <About />
    </>
    )
}
export default Home