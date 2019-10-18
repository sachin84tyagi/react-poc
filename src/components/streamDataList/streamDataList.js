import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";

import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import "./_streamDataList.scss";

class StreamDataList extends Component {
  state = {
    redirect: true,
    messages: [],
    showSideBar: true,
    open: false,
    name: "",
    mob: "",
    email: "",
    errors: "",
    messageDatas: [],
    spinnerStatus: false
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

  async componentWillMount() {
    var messageData = [];
    const resp = await axios.get(
      "https://e50gckptya.execute-api.us-east-1.amazonaws.com/prod/",
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    if (resp) {
      this.setState({
        messagesData: resp.data
      });
      resp.data.map(message => {
        // console.log("in face detection", JSON.stringify(message.externalImageId));
        var d = new Date();
        var date = new Date(
          message.serverTimeStamp * 1000 + d.getTimezoneOffset() * 60000
        );
        var new_date =
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes();
        var newObject = {
          ExternalImageId: message.externalImageId,
          ServerTimestamp: new_date,
          ServerTimestampOriginal: message.serverTimeStamp,
          ExternalImageIdUrl: JSON.stringify(message.externalImageId)
        };
        messageData.push(newObject);
        // console.log("in face detection", newObject);
        this.setState({
          messageDatas: messageData
        });
      });
    }

    // console.log("in the streamDataList", messageData);
  }

  render() {
    const { messageDatas } = this.state;

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
                    Stream Data History
                    <table className="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Image</th>
                          <th scope="col">TimeStamp</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messageDatas && messageDatas.length > 0
                          ? messageDatas.map((message, key) => (
                              <tr key={key}>
                                <th scope="row">{key + 1}</th>
                                <td>
                                  {message.ExternalImageId.map((ms, index) => {
                                    return (
                                      <span key={index}> &nbsp; {ms}</span>
                                    );
                                  })}
                                </td>
                                <td>{message.ServerTimestamp}</td>
                                <td>
                                  <Link
                                    className="btn btn-warning btn-sm"
                                    to={`/notificationDetails/${message.ExternalImageIdUrl}/${message.ServerTimestampOriginal}`}
                                  >
                                    Play
                                  </Link>
                                </td>
                              </tr>
                            ))
                          : null}
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

function mapStateToProps(state) {
  return {
    state
  };
}

const streamDataList = connect(
  mapStateToProps,
  null
)(withRouter(StreamDataList));

export { StreamDataList };
