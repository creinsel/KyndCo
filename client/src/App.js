import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Bootstrapintro from "./Components/Intro";
import Bootstrapabout from "./Components/About";
import Badge from "./Components/Badge";
import Team from "./Components/Team";
import Footer from "./Components/Footer";

// import Chart from "./components/Chart";
// import Dashboard from "./pages/Dashboard";
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
            {/* <Route path="/user/:id" component={Dashboard} /> */}
          </Switch>
        </div>
      </Router>
    </KindActContext.Provider>
  );
}

export default App;
