import React, { useContext } from "react";
import TasksContext from "../services/TasksContext";
import { List, ListItem, ListItemText } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const OverviewStats = () => {
    const { history } = useContext(TasksContext)
    let i = 0

    const overviewArr = history.reduce((arr, { name }) => {
        if (arr.some(item => item.name === name)) {
            const index = arr.findIndex(item => item.name === name)
            arr[index].count += 1
            return arr
        }
        arr.push({ name, count: 1 })
        return arr
    }, [])


    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {overviewArr.map(({ name, count }) =>
                <ListItem key={i++}>
                    <ListItemText> <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 35 }} /></ListItemText>
                    <ListItemText>Task "{name}"</ListItemText>
                    <ListItemText>Completed {count} {count > 1 ? "times" : "time"}</ListItemText>
                </ListItem>)}
        </List>
    )
}

export default OverviewStats