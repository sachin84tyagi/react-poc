import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import classnames from "classnames";

import "./dashboard.scss";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

//import ReactPlayer from "react-player";
// import Modal from "react-responsive-modal";
// import { relative } from "path";
// import videoPlay from "../../assets/images/play.png";
// import axios from "axios";
// import { Player } from "video-react";
import VideoPlayer from "../../helpers/videoPlayer";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { history } from "../../helpers/history";

//import firebase from "../../firebase";

class Dashboard extends Component {
  state = {
    visible: true,
    open: false,
    isFlipped: false,
    _rackData: [],
    selectedIndex: -1,
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    video: [],
    showSideBar: true,
    videoData: []
  };

  onOpenModal = id => {
    this.setState({
      open: {
        [id]: true
      }
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  changeIcon = id => {
    if (this.state.selectedIndex != id) {
      this.setState({ selectedIndex: id });
    } else {
      this.setState({ selectedIndex: -1 });
    }
  };

  onClickFn = data => {
    this.setState({
      showSideBar: data
    });
  };

  componentDidMount() {
    // console.log("in the dashboard", this.props.liveStreamVideoData);
    try {
      let data = this.props.liveStreamVideoData.liveStreamData;

      if (data) {
        let videoJsOptionsName = [];
        data.map((res, index) => {
          videoJsOptionsName[index] = {
            autoplay: true,
            controls: false,
            sources: [
              {
                src: data[index].streamUrl,
                type: "application/x-mpegURL"
              }
            ],
            index: "video-container" + index,
            id: "video-js" + index
          };
        });

        // console.log("in dashboard response", videoJsOptionsName);
        this.setState({
          videoData: videoJsOptionsName
        });
      }
    } catch (err) {
      history.push("/");
    }
  }

  render() {
    const { videoData } = this.state;
    console.log("in the render dashboard", videoData);
    var videoDatas = videoData.reduce(
      (rows, key, index) =>
        (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
        rows,
      []
    );
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
                    paddingBottom: "0px",
                    marginBottom: "0px",
                    marginLeft: "0px"
                  }}
                >
                  <div className="car-list-header col-md-12">
                    Video Information List
                  </div>
                </div>
                <div>
                  {videoDatas.map((data, index) => {
                    return (
                      <div key = {index} className="row">
                        {data.map((data, index) => {
                          return (
                            <div
                              className="col-6"
                              style={{ color: "#fff" }}
                              key={index}
                            >
                              <div
                                className={`text-center cccc video-player`}
                                key={index}
                              >
                                <div
                                  style={{
                                    boxShadow: "0 0 5px #DAA520",
                                    backgroundColor: "#000"
                                  }}
                                  key={index}
                                >
                                  <div
                                    style={this.styleDiv}
                                    key={index}
                                    className={data.index}
                                  >
                                    <VideoPlayer {...data} key={index} />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    color: "#d19b3d",
                                    fontSize: "13px",
                                    marginBottom: "40px",
                                    marginTop: "20px"
                                  }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                  {/* {videoData.map((data, index) => {
                    return (
                      <div className={`text-center cccc video-player`} key={index}>
                        <div
                          style={{
                            boxShadow: "0 0 5px #DAA520",
                            backgroundColor: "#000"
                          }}
                          key={index}
                        >
                          <div
                            style={this.styleDiv}
                            key={index}
                            className={data.index}
                          >
                            <VideoPlayer {...data} key={index} />
                          </div>
                        </div>
                        <div
                          style={{
                            color: "#d19b3d",
                            fontSize: "13px",
                            marginBottom: "40px",
                            marginTop: "20px"
                          }}
                        ></div>
                      </div>
                    );
                  })} */}
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
    liveStreamVideoData: state.liveVideoStreamReducer
  };
}

const connectedDashboard = connect(
  mapStateToProps,
  null
)(withRouter(Dashboard));

export { connectedDashboard as Dashboard };
