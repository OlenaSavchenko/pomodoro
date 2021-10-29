import React, { useEffect, useState, createContext } from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import History from "./pages/History";
import Nav from "./components/Header";


export const TimeContext = createContext()


const App = () => {
  const [time, setTime] = useState(25 * 60)

  useEffect(() => {
    setInterval(() => {
      setTime((time) => time - 1)
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>

      <Nav />
      <Switch>
        <Route exact path='/'>
          <Redirect to="/home" />
        </Route>
        <TimeContext.Provider value={time}>
          <Route exact path="/home" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/overview" component={Overview} />
        </TimeContext.Provider>
      </Switch>
    </>
  );
}

export default App;
