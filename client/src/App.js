import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Badge from "./Components/Badge";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import Nav from "./Components/Nav";
// import Chart from "./components/Chart";
import { KindActContext } from "./context/KindActContext";
import { UserIdContext } from "./context/UserIdContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [acts, setActs] = useState([]);
  const [userId, setUserId] = useState("");
  const [userActs, setUserActs] = useState("");

  return (
    <KindActContext.Provider value={{ acts, setActs }}>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <UserContext.Provider value={{ userActs, setUserActs }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Nav />
                <Bootstrapintro />
                <About />
                <Badge />
                <Team />
                <Footer />
              </Route>
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </UserContext.Provider>
      </UserIdContext.Provider>
    </KindActContext.Provider>
  );
}

export default App;
