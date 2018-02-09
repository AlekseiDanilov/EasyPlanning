import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import UserPage from "../page/UserPage";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={routes.index} exact component={UserPage} />
          <Route path={routes.login} component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export const routes = {
  index: "/",
  login: "/login"
};
