import { TasksContext } from "../App";
import { useContext } from 'react';

const History = () => {
    const { history } = useContext(TasksContext)
    return (
        <ul>
            {history.map(({ name, date }) => <li key={date}><p>{name}</p><p>{date}</p></li>)}
        </ul>

    )
}


export default History;