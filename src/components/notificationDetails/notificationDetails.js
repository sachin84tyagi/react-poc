import React, { Component } from "react";

import { messaging } from "../../init-fcm";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import "./notificationDetails.scss";

import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../helpers/videoPlayer";

class NotificationDetails extends Component {
  state = {
    visible: true,
    redirect: true,
    data: [],
    videoJsOptions: {}
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
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
    console.log("CDM PARAMS image ", this.props.match.params.image);
    console.log("CDM PARAMS timeStamp ", this.props.match.params.timeStamp);
    // console.log(
    //   "CDM PARAMS stream ",
    //   JSON.parse(this.props.match.params.stream)
    // );
    //console.log("CDM PARAMS ::: ", JSON.parse(this.props.match.params.id));

    let axiosConfig = {
      headers: {
        "Content-Type":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
      }
    };

    const { data } = await axios.post(
      "https://vhlvztx86k.execute-api.us-east-1.amazonaws.com/prod/getvideostreambytimestamp",
      {
        streamName: "RekognitionStream",
        startTime: this.props.match.params.timeStamp,
        endTime: this.props.match.params.timeStamp
      },
      axiosConfig
    );
    console.log("data in notification details", data);
    if (data) {
      const videoJsOptions = {
        autoplay: true,
        controls: false,
        sources: [
          {
            src: data
          }
        ]
      };
      this.setState({ videoJsOptions });
    }
  }

  componentWillUnmount() {
    const data = null;
  }
  render() {
    const { videoJsOptions } = this.state;

    console.log("videoJsOptions :::::>>>>> ", videoJsOptions);

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
                    Messages Details
                    <div className="row mt-3">
                      <div className={`col-lg-12 text-center`}>
                        <div
                          style={{
                            boxShadow: "0 0 5px #DAA520",
                            backgroundColor: "#000"
                          }}
                        >
                          <VideoPlayer {...videoJsOptions} />
                          <hr />
                        </div>

                        <div
                          style={{
                            color: "#d19b3d",
                            fontSize: "13px",
                            marginBottom: "40px",
                            marginTop: "20px"
                          }}
                        >
                          dddd
                          {
                            //videoData.name
                          }
                        </div>
                      </div>
                    </div>
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

export default NotificationDetails;
