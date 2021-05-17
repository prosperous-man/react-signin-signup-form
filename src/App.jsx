import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login_old from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Forgot from "./components/Auth/Forgot";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login_old/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset">
          <Forgot />
        </Route>
        <Route path="/">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
