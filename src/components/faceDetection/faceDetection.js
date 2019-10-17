import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import "./_faceDetection.scss";

class FaceDetection extends Component {
  state = {
    redirect: true,
    messages: [],
    showSideBar: true,
    messageDatas: [],
    spinnerStatus: false
  };

  onClickFn = data => {
    // console.log("data", data);
    this.setState({
      showSideBar: data
    });
  };

  componentWillMount() {
    console.log(
      "in the face props",
      this.props.spinnerStatusReducer.spinnerStatus
    );
  }

  componentWillReceiveProps(props) {
    console.log(
      "in the dwhghdjfjfjfj>>>",
      props.spinnerStatusReducer.spinnerStatus
    );
    if (props.spinnerStatusReducer.spinnerStatus) {
      this.setState({
        spinnerStatus: true
      });
    }
    var messageData = [];
    props.messages.map(message => {
      // console.log("in face detection", JSON.parse(message.ExternalImageId)[0]);
      var d = new Date();
      var date = new Date(
        message.ServerTimestamp * 1000 + d.getTimezoneOffset() * 60000
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
        ExternalImageId: JSON.parse(message.ExternalImageId)[0],
        ServerTimestamp: new_date,
        StreamArn: message.StreamArn,
        ExternalImageIdUrl: message.ExternalImageId,
        ServerTimestampOriginal: message.ServerTimestamp
      };
      messageData.push(newObject);
      // console.log("in face detection", newObject);
      this.setState({
        messageDatas: messageData
      });
    });
  }

  render() {
    // console.log("hwgdggfgjf", this.state.messageDatas);
    var classNames = ""
    if(!this.state.spinnerStatus) {
      classNames = ""
    } else {
      classNames = "spinner-fade"
    }
    return (
      <React.Fragment>
        <div className="car-management">
          <Header
            displaySideBar={true}
            isAuthorized={true}
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
          <div id="content" className = {classNames} >
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
                        {this.state.messageDatas &&
                        this.state.messageDatas.length > 0
                          ? this.state.messageDatas.map((message, key) => (
                              <tr key={key}>
                                <th scope="row">{key + 1}</th>
                                <td>{message.ExternalImageId}</td>
                                <td>{message.ServerTimestamp}</td>
                                <td>{message.StreamArn}</td>
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
          {this.state.spinnerStatus ? 
        <span className = "spinner">Please Wait...</span> : ""}
        </div>
        
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  // console.log("in the sidebar", state)
  return state;
}

export default connect(
  mapStateToProps,
  null
)(FaceDetection);
