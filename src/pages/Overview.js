import React, { useContext } from "react";
import { TasksContext } from "../App";

const Overview = () => {
    const { history } = useContext(TasksContext)
    const result = history.reduce((arr, { name }) => {
        if (arr.some(item => item.name === name)) {
            const index = arr.findIndex(item => item.name === name)
            arr[index].count += 1
            return arr
        }
        arr.push({ name, count: 1 })
        return arr
    }, [])

    let i = 0
    return (
        <ul>
            {result.map(({ name, count }) => <li key={i++}><p>{name}</p><p>{count}</p></li>)}
        </ul>
    )
}

export default Overview