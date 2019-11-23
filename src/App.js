import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Troubleshooting from "./pages/Troubleshooting";
import PageNotFound from "./pages/Page404";
import Navigationbar from "./components/Navigationbar";
import Privacy from "./pages/Privacy";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/troubleshooting" component={Troubleshooting} />
          <Route exact path="/privacy" component={Privacy} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
