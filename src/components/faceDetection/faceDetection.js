import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import "./_faceDetection.scss";

class FaceDetection extends Component {
  state = {
    redirect: true,
    messages: [],
    showSideBar: true
  };

  onClickFn = data => {
    console.log("data", data);
    this.setState({
      showSideBar: data
    });
  };

  constructor(props) {
    super(props);
    // console.log("in face detection component", this.props.messages);
  }

  render() {
    console.log("in face detection render", this.props.messages);
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
                        {this.props.messages &&
                          this.props.messages.map((message, key) => (
                            <tr key={key}>
                              <th scope="row">{key + 1}</th>
                              <td>{message.ExternalImageId}</td>
                              <td>{message.ServerTimestamp}</td>
                              <td>{message.StreamArn}</td>
                              {/* <td>{`/notificationDetails/${message.ExternalImageId}/${message.ServerTimestamp}`}</td> */}
                              <td>
                                <Link
                                  className="btn btn-warning btn-sm"
                                  to={`/notificationDetails/${message.ExternalImageId}/${message.ServerTimestamp}`}
                                >
                                  Play
                                </Link>
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

export default FaceDetection;
