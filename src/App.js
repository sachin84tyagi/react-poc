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
      this.props.clearAlerts();
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Route />
        </Router>
      </React.Fragment>
    );
  }
}

//export default App;

function mapStateToProps(state) {
  // console.log("ddsgschghx>>>>>>>>>", state)
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
