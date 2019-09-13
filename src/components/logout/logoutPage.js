import { Component } from "react";
import { connect } from 'react-redux';

import { userAuthActions } from "../../actions/authAcions"

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logout();
    this.props.history.push("/");
  }
  render() {
    return null;
  }
}

const actionCreators = {
  logout: userAuthActions.logout
};


export default connect(null, actionCreators)(LogoutPage);
