import SetTimeForm from "../components/SetTimeForm";
import Title from "../components/Title";
import { Box } from "@mui/material";

const Settings = () => {
    return (
        <Box textAlign='center'>
            <Title text="Change task`s time here&#128071;" />
            <SetTimeForm />
        </Box>)
}

export default Settings