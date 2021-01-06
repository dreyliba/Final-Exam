import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./bootstrap.min.css";
import "./App.css";
import Page from "./Page";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
