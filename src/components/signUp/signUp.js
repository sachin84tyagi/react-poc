import React, { Component } from "react";
import {
  FormBuilder,
  Validators,
  FieldGroup,
  FieldControl
} from "react-reactive-form";

import { NavLink } from "react-router-dom";

import Header from "../../shared/header/header";
import "./_signUp.scss";
import { authService } from "../../services/authService";

import { history } from "../../helpers/history";

class SignUp extends Component {
  signUpForm = FormBuilder.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    userContactDTO: FormBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      phoneNo: ["", [Validators.required]]
    }),
    createdByUserId: Math.floor(Math.random() * 100000000),
    employeeId: Math.floor(Math.random() * 100000000),
    modifiedByUserId: Math.floor(Math.random() * 100000000),
    organization: "csgcghcs",
    userId: Math.floor(Math.random() * 100000000)
  });

  handleSubmitSignUp = async e => {
    e.preventDefault();
    // console.log("in the sign up form", this.signUpForm.value);
    if (this.signUpForm.value) {
      var authStatus = await authService.signUp(this.signUpForm.value)
      // console.log("auth status in component", authStatus)
      if(authStatus.status === 201) {
        history.push("/")
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header displaySideBar={false}></Header>
        <div className="signup-bg ">
          <div className="container">
            <div className="row signup-main">
              <div className="col-lg-3" />
              <div className="col-lg-6 col-sm-8 col-10 signup-form">
                <div className="signup-inner-header ">
                  <h2>Sign Up</h2>
                </div>
                <div className="already-account">
                  <span>Already have an Account? </span> &nbsp;
                  <NavLink to="/loginPage">
                    <span style={{ color: "#FFBF00" }}>Login</span>
                  </NavLink>
                </div>
                <div>
                  <FieldGroup
                    control={this.signUpForm}
                    render={({ invalid }) => (
                      <form onSubmit={e => this.handleSubmitSignUp(e)}>
                        <div className="row d-flex">
                          <FieldControl
                            name="firstName"
                            options={{ validators: Validators.required }}
                            render={({ handler, touched, hasError }) => (
                              <div className="form-group signup-name">
                                <label className="form-label">First Name</label>
                                <input
                                  type="text"
                                  className="form-control form-input"
                                  id="firstName"
                                  aria-describedby="First Name"
                                  placeholder="First Name..."
                                  {...handler()}
                                />
                              </div>
                            )}
                          />
                          <FieldControl
                            name="lastName"
                            options={{ validators: Validators.required }}
                            render={({ handler, touched, hasError }) => (
                              <div className="form-group signup-name">
                                <label className="form-label">Last Name</label>
                                <input
                                  type="text"
                                  className="form-control form-input"
                                  id="lastName"
                                  aria-describedby="Last Name"
                                  placeholder="Last Name..."
                                  {...handler()}
                                />
                              </div>
                            )}
                          />
                        </div>
                        <div className="row">
                          <FieldControl
                            name="userContactDTO.email"
                            options={{ validators: Validators.required }}
                            render={({ handler, touched, hasError }) => (
                              <div className="form-group signup-fields">
                                <label className="form-label">Email</label>
                                <input
                                  type="email"
                                  className="form-control form-input"
                                  id="email"
                                  aria-describedby="Email"
                                  placeholder="xyz@email.com"
                                  {...handler()}
                                />
                              </div>
                            )}
                          />
                        </div>
                        <div className="row">
                          <FieldControl
                            name="userContactDTO.phoneNo"
                            options={{ validators: Validators.required }}
                            render={({ handler, touched, hasError }) => (
                              <div className="form-group signup-fields">
                                <label className="form-label">
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control form-input"
                                  id="phoneNo"
                                  aria-describedby="Phone Number"
                                  placeholder="phone number"
                                  {...handler()}
                                />
                              </div>
                            )}
                          />
                        </div>

                        <div className="signup-button">
                          <button
                            type="submit"
                            disabled={invalid}
                            className="btn btn-primary btn-block"
                          >
                            <span className="Sign-in">Register</span>
                          </button>
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
