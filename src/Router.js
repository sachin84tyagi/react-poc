import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { LoginPage } from "./components/login/loginPage";

import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";

import Logout from "./components/logout/logoutPage";

import { Dashboard } from "./components/Dashboard/Dashboard";
import SignUp from "./components/signUp/signUp"

import NotificationData from "./components/notificationData/notificationData";
import NotificationDetails from "./components/notificationDetails/notificationDetails";

import Message from "./components/messages/messages";
import StreamData from "./components/streamData/streamData";
import {StreamDataList} from "./components/streamDataList/streamDataList"


const Router = props => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/loginPage" component={LoginPage} />
      <Route exact path="/notificationData" component={NotificationData} />
      <Route
        exact
        path="/notificationDetails/:image/:timeStamp"
        component={NotificationDetails}
      />
      {/* <Route exact path="/notificationDetails" component={NotificationDetails} /> */}
      <Route exact path="/message" component={Message} />
      <Route exact path="/signUp" component={SignUp} />

      <PrivateRoute exact path="/logoutPage" component={Logout} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/streamData" component={StreamData} />
      <PrivateRoute exact path="/streamDataList" component={StreamDataList} />
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
