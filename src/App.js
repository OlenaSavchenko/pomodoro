import React, { useState, createContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import History from "./pages/History";
import Nav from "./components/Header";

export const TimeContext = createContext()
export const TasksContext = createContext()

let interval

const App = () => {
  const [time, setTime] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [history, setHistory] = useState([])
  const [activeTask, setActiveTask] = useState()

  useEffect(() => {
    if (time < 0) {
      reset()
      setHistory([...history, { name: activeTask, date: Date.now() }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  const start = () => {
    if (!activeTask) return
    interval = setInterval(() => {
      setTime((time) => time - 1)
    }, 1000);
    setIsRunning(true)
  }

  const stop = () => {
    clearInterval(interval)
    setIsRunning(false)
  }

  const reset = () => {
    setTime(25 * 60)
    stop()
  }

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Redirect to="/home" />
        </Route>
        <TimeContext.Provider value={{ time, start, stop, reset, isRunning }}>
          <TasksContext.Provider value={{ setActiveTask, activeTask, history }}>
            <Route exact path="/home" component={Home} />
            <Route exact path="/history" component={History} />
            <Route exact path="/overview" component={Overview} />
          </TasksContext.Provider>
        </TimeContext.Provider>
      </Switch>
    </>
  );
}

export default App;
