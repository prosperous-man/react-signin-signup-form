import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
