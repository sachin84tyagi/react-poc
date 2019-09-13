import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { LoginPage } from "./components/login/loginPage";

import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";

import Logout from "./components/logout/logoutPage";

import Dashboard from "./components/Dashboard/Dashboard";

import Header from "./shared/header/header";

import Footer from "./shared/footer/footer";

const Router = props => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/loginPage" component={LoginPage} />
      <PrivateRoute exact path="/logoutPage" component={Logout} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  </React.Fragment>
);

function mapStateToProps(state) {
  const { authentication } = state;
  return {
    authentication
  };
}
export default connect(mapStateToProps)(Router);
