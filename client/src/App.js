import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Bootstrapintro from "./Components/intro";
import About from "./Components/about";
import Badge from "./Components/badge";
import Team from "./Components/team";
import Footer from "./Components/footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import Nav from "./Components/Nav";
// import Chart from "./components/Chart";
import { KindActContext } from "./context/KindActContext";
import { UserIdContext } from "./context/UserIdContext";

function App() {
  const [acts, setActs] = useState([]);
  const [userId, setUserId] = useState('');
  // const { acts, setActs } = useContext(KindActContext);
  return (
    <KindActContext.Provider value={{ acts, setActs }}>
      <UserIdContext.Provider value={{ userId, setUserId }} >
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
      </UserIdContext.Provider>
    </KindActContext.Provider>
  );
}

export default App;
