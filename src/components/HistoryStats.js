import TasksContext from "../services/TasksContext";
import { useContext } from 'react';
import { List, ListItem, ListItemText } from "@mui/material";
import { formatTime } from "../share/formatTime";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const HistoryStats = () => {
    const { history } = useContext(TasksContext)
    let i = 1
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {history.map(({ name, date }) =>
                    <ListItem key={i++}>
                        <ListItemText> <AccessAlarmsIcon color="primary" sx={{ fontSize: 35 }} /></ListItemText>
                        <ListItemText>"{name}"</ListItemText>
                        <ListItemText>{formatTime(date.getDay())}/{formatTime(date.getMonth() + 1)}/{date.getFullYear()}</ListItemText>
                        <ListItemText>{formatTime(date.getHours())}:{formatTime(date.getMinutes())}:{formatTime(date.getSeconds())}</ListItemText>
                    </ListItem>)}
            </List>
        </>
    )
}

export default HistoryStats