import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "containers/home";
import Profile from "containers/profile";
import Login from "containers/login";
import Signup from "containers/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
