import React, { Component } from "react";
import { Router } from "react-router-dom";

import Route from "./Router";
import { history } from "./helpers/history";
import { connect } from "react-redux";
import { alertActions } from "./actions/alertActions";
// import Footer from "./shared/footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      console.log("APP JS ", location);
      console.log("PREPARING REDIRECT TO " + location.pathname);
      console.log(action, location.pathname, location.state);
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <React.Fragment>
        {alert.message && (
          <div className={`alert notification ${alert.type}`}>
            {alert.message}
          </div>
        )}
        <Router history={history}>
          <Route />
        </Router>
      </React.Fragment>
    );
  }
}

//export default App;

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(
  mapStateToProps,
  actionCreators
)(App);
export { connectedApp as App };
