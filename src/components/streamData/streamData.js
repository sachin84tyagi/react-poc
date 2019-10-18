import React, { Component } from "react";

import "./_streamData.scss";
import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";

import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import { Redirect } from "react-router-dom";

import Modal from "react-responsive-modal";
import { validateAll } from "indicative/validator";

class StreamData extends Component {
  state = {
    redirect: true,
    messages: [],
    showSideBar: true,
    open: false,
    name: "",
    mob: "",
    email: "",
    errors: ""
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/message" />;
    }
  };

  onClickFn = data => {
    // console.log("data", data);
    this.setState({
      showSideBar: data
    });
  };

  async componentDidMount() {
    const messages = await JSON.parse(localStorage.getItem("payload"));
    // console.log("in the notification data", messages);
    this.setState({ messages });
  }

  change = e => {
    console.log("Name::: ", e.target.name);
    const name = e.target.name;
    console.log("Value:: ", e.target.value);
    const value = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    const rules = {
      name: "required|string",
      mob: "required|string",
      email: "required|email"
    };

    validateAll(data, rules)
      .then(() => {
        console.log("Form Submitted");
      })
      .catch(errors => {
        const formattedErrors = {};
        errors.forEach(error => (formattedErrors[error.field] = error.message));
        this.setState({ errors: formattedErrors });
      });
  };

  render() {
    const { open } = this.state;

    return (
      <React.Fragment>
        <div className="car-management">
          <Header
            displaySideBar={true}
            isAuthorized={this.state.isLogin}
            onClickFn={this.onClickFn}
          />
        </div>
        <div
          className="wrapper"
          style={{ marginTop: "56px", backgroundColor: "#232838" }}
        >
          {this.state.showSideBar ? (
            <Sidebar sideBarStatus={this.state.showSideBar} />
          ) : (
            <SidebarCollpase></SidebarCollpase>
          )}
          <div id="content">
            <div
              className="social-box"
              style={{
                paddingBottom: "200px",
                paddingLeft: "18px",
                paddingRight: "12px"
              }}
            >
              <div className="container">
                <div
                  className="user-list row"
                  style={{
                    borderBottom: "0px solid #FFF",
                    marginTop: "3%"
                  }}
                >
                  <div className="car-list-header col-md-12">
                    Stream Data List
                    <table className="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>

                          <th scope="col">Video Name</th>
                          <th scope="col">Label</th>
                          <th scope="col">Creation Date</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>

                          <td>Video</td>
                          <td>Label</td>
                          <td>CreatedOn</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              type="submit"
                              onClick={this.onOpenModal}
                            >
                              On
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Modal open={open} onClose={this.onCloseModal} center>
                      <form
                        onSubmit={this.handleSubmit}
                        method="post"
                        id="contactFrm"
                        name="contactFrm"
                      >
                        <div className="modal-header">
                          <h4 className="modal-title">Modal Heading</h4>
                        </div>
                        <div className="modal-body">
                          <input
                            type="text"
                            onChange={e => this.change(e)}
                            placeholder="Please input your Name"
                            value={this.state.name}
                            name="name"
                            className="txt input-sm"
                          />
                          {this.state.errors["name"] && (
                            <small className="text-danger">
                              {this.state.errors["name"]}
                            </small>
                          )}
                          <input
                            type="text"
                            onChange={e => this.change(e)}
                            placeholder="Please input your mobile No"
                            value={this.state.mob}
                            name="mob"
                            className="txt"
                          />
                          {this.state.errors["mob"] && (
                            <small className="text-danger">
                              {this.state.errors["mob"]}
                            </small>
                          )}
                          <input
                            type="text"
                            onChange={e => this.change(e)}
                            placeholder="Please input your Email"
                            value={this.state.email}
                            name="email"
                            className="txt"
                          />
                          {this.state.errors["email"] && (
                            <small className="text-danger">
                              {this.state.errors["email"]}
                            </small>
                          )}
                        </div>
                        <div className="modal-footer">
                          <input
                            type="submit"
                            className="btn btn-danger"
                            value="Submit"
                          />
                        </div>
                      </form>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StreamData;
