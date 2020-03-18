import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Bootstrapintro from "./components/Intro";
import Bootstrapabout from "./components/About";
import Badge from "./components/Badge";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { KindActContext } from "./context/KindActContext";

function App() {
  const value = useContext(KindActContext);
  return (
    <KindActContext.Provider value={value}>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Bootstrapintro />
              <Bootstrapabout />
              <Badge />
              <Team />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </KindActContext.Provider>
  );
}

export default App;
