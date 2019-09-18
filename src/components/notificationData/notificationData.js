import React, { Component } from "react";

import { messaging } from "../../init-fcm";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import "./notificationData.scss";

import { Route, Redirect } from "react-router-dom";
import axios from "axios";

class NotificationData extends Component {
  state = {
    visible: true,
    redirect: true,
    messages: []
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  playMethod = async stream => {
    let axiosConfig = {
      headers: {
        "Content-Type":
          "X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Origin": "*"
      }
    };

    const response = await axios.post(
      "",
      {
        streamName: "RekognitionStream",
        startTime: "2019-09-12 18:15:50",
        endTime: "2019-09-12 18:15:56"
      },
      axiosConfig
    );
    console.log("PLAY Method", stream);
    console.log("Response ::>>> ", response);
  };

  redirectToMethod = () => {
    // <Route
    //   render={<Redirect to={{ pathname: "/messages" }}></Redirect>}
    // ></Route>;
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/message" />;
    }
  };

  constructor(props) {
    super(props);
    const dataArr = [];

    messaging.onMessage(async function(payload) {
      const { data } = await payload;
      dataArr.push(data);

      localStorage.setItem("payload", JSON.stringify(dataArr));
    });
  }

  async componentDidMount() {
    const messages = JSON.parse(localStorage.getItem("payload"));
    this.setState({ messages });
  }

  render() {
    const { messages } = this.state;

    return (
      <React.Fragment>
        <div className="car-management">
          <Header isAuthorized={this.state.isLogin} />
        </div>
        <div className="wrapper" style={{ marginTop: "56px" }}>
          {this.state.visible ? <Sidebar /> : ""}

          <div id="content">
            <div
              className="social-box"
              style={{
                background: "#232838",
                paddingBottom: "200px",
                paddingLeft: "18px",
                paddingRight: "12px"
              }}
            >
              <div className="container" style={{ backgroundColor: "#232838" }}>
                <div
                  className="user-list row"
                  style={{
                    borderBottom: "0px solid #FFF",
                    paddingBottom: "0px",
                    marginBottom: "0px",
                    marginLeft: "0px"
                  }}
                >
                  <div className="car-list-header col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light navbarAdditionClass">
                      <button
                        type="button"
                        id="sidebarCollapse"
                        className="btn btn-warning btn-bg"
                        onClick={this.toggleMenu}
                      >
                        <i className="fas fa-align-left"></i>
                      </button>
                    </nav>
                    Messages List
                    <table className="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Image</th>
                          <th scope="col">TimeStamp</th>
                          <th scope="col">Stream</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages.map((message, key) => (
                          <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{message.ExternalImageId}</td>
                            <td>{message.ServerTimestamp}</td>
                            <td>{message.StreamArn}</td>
                            <td>
                              <button
                                onClick={() =>
                                  this.playMethod(message.StreamArn)
                                }
                              >
                                Play
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default NotificationData;