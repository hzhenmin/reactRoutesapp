import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./page1";
import SecondPage from "./page2";

export default () =>
  <Switch>
    <Route path="/page1" exact component={MainPage} />
    <Route path="/page2" exact component={SecondPage} />
  </Switch>;