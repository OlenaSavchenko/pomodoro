import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import History from "./pages/History";
import Header from "./components/Header/Header";
import Settings from "./pages/Settings";
import TimeContext from "./services/TimeContext";
import TasksContext from "./services/TasksContext";
import { theme } from "./services/theme";
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

let interval

const App = () => {
  const [time, setTime] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [history, setHistory] = useState([])
  const [activeTask, setActiveTask] = useState()


  useEffect(() => {
    if (time < 0) {
      reset()
      setHistory([...history, { name: activeTask, date: new Date() }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  useEffect(() => {
    if (localStorage.getItem('history')) {
      const historyLS = JSON.parse(localStorage.getItem('history'))
      const history = historyLS.map(({ name, date }) => ({
        name, date: new Date(date)
      }))
      setHistory(history)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

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
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Header />
          <Switch>
            <Route exact path='/'>
              <Redirect to="/home" />
            </Route>
            <TimeContext.Provider value={{ time, start, stop, reset, isRunning, setTime }}>
              <TasksContext.Provider value={{ setActiveTask, activeTask, history }}>
                <Route exact path="/home" component={Home} />
                <Route exact path="/history" component={History} />
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/settings" component={Settings} />
              </TasksContext.Provider>
            </TimeContext.Provider>
          </Switch>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
