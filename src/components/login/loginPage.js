import React, { Component } from "react";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { authService } from "../../services/authService";
import "./_loginPage.scss";
import Header from "../../shared/header/header";

import * as constant from "../../assets/constants";
// import { userAuthActions } from "../../actions/authAcions";
// import { footerStatusAction } from "../../actions/footerStatusAction";
import hclLogo from "../../assets/images/HCLLogo.png";

import {
  userAuthActions,
  footerActions,
  alertActions
} from "../../actions/index";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      submitted: false,
      isLogin: false
    };

    // reset login status
    // console.log("props in login", this.props);
    // this.props.dispatch(userAuthActions.logout());
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (this.loginForm.value) {
      var loggendInStatus = await this.props.userLogin(
        this.loginForm.value.userName,
        this.loginForm.value.password
      );
      console.log("loggendInStatus ::::::: >>>>>>>>>", loggendInStatus);
      if (loggendInStatus === true) {
        this.props.history.push("/dashboard");
      } else {
        this.props.history.push("/");
      }
    }
  };

  loginForm = FormBuilder.group({
    userName: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  render() {
    const  loginStatus  = Object.assign({}, this.props.userLoginStatus)
    return (
      <React.Fragment>
        <Header displaySideBar={false}></Header>
        <div className="login-bg ">
          {loginStatus && loginStatus.message && (
            <div className={`alert notification ${loginStatus.type}`}>
              {loginStatus.message}
            </div>
          )}
          <div className="container">
            <div className="row login-main">
              <div className="col-lg-3" />
              <div className="col-lg-5 login-tag-line">
                <h2>TRUSTED MOBILITY PLATFORM AND SERVICES</h2>
              </div>

              <div className="form_container login-form col-lg-4 col-sm-8 col-10">
                <div className="login-inner-header ">
                  <h2>Log In</h2>
                </div>
                <div className="dont-have-an-account">
                  <span>Don't have an account? </span> &nbsp;
                  <NavLink to="/signUp" className="sign-up">
                    Sign Up
                  </NavLink>
                </div>
                <div>
                  <FieldGroup
                    control={this.loginForm}
                    render={({ invalid }) => (
                      <form onSubmit={e => this.handleSubmit(e)}>
                        <FieldControl
                          name="userName"
                          options={{ validators: Validators.required }}
                          render={({ handler, touched, hasError }) => (
                            <div
                              className="form-group"
                              style={{ position: "relative" }}
                            >
                              <label style={{ fontSize: "13px" }}>
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Username"
                                {...handler()}
                              />
                              <p className="validation-info">
                                {touched &&
                                  ((hasError("required") &&
                                    constant.userName_Validations
                                      .userName_Required) ||
                                    (hasError("email") &&
                                      constant.userName_Validations
                                        .valid_userName))}
                              </p>
                            </div>
                          )}
                        />
                        <FieldControl
                          name="password"
                          options={{ validators: Validators.required }}
                          render={({ handler, touched, hasError }) => (
                            <div
                              className="form-group"
                              style={{ position: "relative" }}
                            >
                              <label style={{ fontSize: "13px" }}>
                                Password
                              </label>
                              <input
                                type={this.state.type}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                {...handler()}
                              />
                              <p className="validation-info">
                                {touched &&
                                  ((hasError("required") &&
                                    constant.password_Validations
                                      .password_Required) ||
                                    (hasError("minLength") &&
                                      constant.password_Validations
                                        .valid_Password))}
                              </p>
                            </div>
                          )}
                        />
                        <div className="justify-content-between align-items-center logged-In">
                          <FieldControl
                            name="keepLogIn"
                            className="checkbox-logIn"
                            render={() => <input type="checkbox" />}
                          />
                          <label
                            className="keep-log"
                            style={{ fontSize: "13px" }}
                          >
                            Keep me logged in
                          </label>
                          <NavLink
                            to="/resetPassword"
                            className="login-form-forget-links float-right"
                          >
                            {constant.login_Form.forget_Password}
                          </NavLink>
                        </div>

                        <div className="login-button">
                          <button
                            type="submit"
                            disabled={invalid}
                            className="btn btn-danger btn-block"
                          >
                            <span className="Sign-in">Login</span>
                          </button>
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
    userLoginStatus: state.alert

  };
}

// function matchDispatchToProps() {

//   return {
//     footerStatus : status => {
//       footerStatusAction.footerStatus(status)
//     }
//   }
// }

const actionCreators = {
  passParam: footerActions.getFooterParam,
  userLogin: userAuthActions.login
};

const connectedLoginPage = connect(
  mapStateToProps,
  actionCreators
)(withRouter(LoginPage));
export { connectedLoginPage as LoginPage };
