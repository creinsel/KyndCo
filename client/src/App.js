import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { KindActContext } from "./context/KindActContext";
import { UserIdContext } from "./context/UserIdContext";
import { UserContext } from "./context/UserContext";
import { UserPointsContext } from "./context/UserPointsContext";
import { UsernameContext } from "./context/UsernameContext";

function App() {
  const [acts, setActs] = useState([]);
  const [userId, setUserId] = useState("");
  const [userActs, setUserActs] = useState("");
  const [userPoints, setUserPoints] = useState("");
  const [username, setUsername] = useState("");

  return (
  <UserPointsContext.Provider value={{ userPoints, setUserPoints }}>
    <KindActContext.Provider value={{ acts, setActs }}>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <UserContext.Provider value={{ userActs, setUserActs }}>
          <UsernameContext.Provider value={{ username, setUsername }}>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Router>
          </UsernameContext.Provider>

        </UserContext.Provider>
      </UserIdContext.Provider>
    </KindActContext.Provider>
  </UserPointsContext.Provider>
  );
}

export default App;
