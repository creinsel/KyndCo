import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Bootstrapintro from "./Components/Intro";
import Bootstrapabout from "./Components/About";
import Badge from "./Components/Badge";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Acts from "./pages/Acts";
import Nav from "./Components/Nav";
// import Chart from "./components/Chart";
import { KindActContext } from "./context/KindActContext";

function App() {
  //const [acts, setActs] = useState([]);
  const {acts, setActs} = useContext(KindActContext);
  return (
    <KindActContext.Provider value={{ acts, setActs}}>
      <Router>
        <Switch>
          {/* <Route path="/">
            <Nav />
            <Bootstrapintro />
            <Bootstrapabout />
            <Badge />
            <Team />
            <Footer />
          </Route> */}
          <Route exact path="/" component={Acts} />
        </Switch>
      </Router>
    </KindActContext.Provider>
  );
}

export default App;
