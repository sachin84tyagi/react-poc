import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./dashboard.scss";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

//import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import { relative } from "path";
import videoPlay from "../../assets/images/play.png";
import axios from "axios";
import { Player } from "video-react";
import VideoPlayer from "../../helpers/videoPlayer";

import VideoPlayer1 from "../../helpers/videoPlayer1";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { liveStreamVideoService } from "../../services/liveStreamVideo.service";

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
    videoJsOptions: {},
    videoJsOptions1: {},
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
    // console.log("data", data);
    this.setState({
      showSideBar: data
    });
  };

  async componentDidMount() {
    let data = await liveStreamVideoService.liveStreamVideo();
    if (data) {
      // if (data[0].streamUrl) {
        const videoJsOptions = {
          autoplay: true,
          controls: false,
          sources: [
            {
              src: data[0].streamUrl,
              type: "application/x-mpegURL"
            }
          ]
        };
        this.setState({
          videoJsOptions: videoJsOptions
        });
      // }
      //  if (data[1] && data[1].streamUrl) {

        const videoJsOptions1 = {
          autoplay: true,
          controls: false,
          sources: [
            {
              src: data[1].streamUrl,
              type: "application/x-mpegURL"
            }
          ]
        };
        this.setState({
          videoJsOptions1: videoJsOptions1
        });

        // const videoJsOptions1 = {
        //   autoplay: true,
        //   controls: false,
        //   sources: [
        //     {
        //       src: data[1].streamUrl,
        //       type: "application/x-mpegURL"
        //     }
        //   ]
        // };
        // this.setState({
        //   videoJsOptions1: videoJsOptions1
        // });
      // }
    }
    // console.log("in componentDidMount00000000", this.state.videoJsOptions);
    // console.log("in componentDidMount111111111", this.state.videoJsOptions1);
  }

  renderVideo = (data, index) => {
    if (index == 0) {
      console.log("in the renderVideo0000000", data.streamUrl);
      const videoJsOptions = {
        autoplay: true,
        controls: false,
        sources: [
          {
            src: data.streamUrl
          }
        ],
        index: "video-js0"
      };
      this.setState({ videoJsOptions });
      return (
        <div className={`text-center cccc video-player`}>
          <div
            style={{
              boxShadow: "0 0 5px #DAA520",
              backgroundColor: "#000"
            }}
          >
            <VideoPlayer {...videoJsOptions} />
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
    } else if (index == 1) {
      console.log("in the renderVideo11111111111", data.streamUrl);
      const videoJsOptions = {
        autoplay: true,
        controls: false,
        sources: [
          {
            src: data.streamUrl
          }
        ],
        index: "video-js1"
      };
      this.setState({ videoJsOptions });
      return (
        <div className={`text-center cccc video-player`}>
          <div
            style={{
              boxShadow: "0 0 5px #DAA520",
              backgroundColor: "#000"
            }}
          >
            <VideoPlayer {...videoJsOptions} />
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
    }
  };

  render() {
    const { open, video, videoJsOptions, videoJsOptions1 } = this.state;

    let calculateDiv = Math.ceil(12 / this.state.video.length);
    calculateDiv = 6;
    if (calculateDiv <= 2) {
      calculateDiv = 2;
    }
    // let videoData = this.props.liveStreamVideoData;
    console.log("in the videoJsOptions", videoJsOptions);

    console.log("in the videoJsOptions1111111111", videoJsOptions1);
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
                <div className="d-flex">
                    <div className={`text-center cccc video-player`}>
                      <div
                        style={{
                          boxShadow: "0 0 5px #DAA520",
                          backgroundColor: "#000"
                        }}
                      >
                        
                        <VideoPlayer {...videoJsOptions} key = '0' />
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
                 
                    <div className={`text-center cccc video-player`}>
                      <div
                        style={{
                          boxShadow: "0 0 5px #DAA520",
                          backgroundColor: "#000"
                        }}
                      >
        
                        <VideoPlayer1 {...videoJsOptions1} key = '1' />
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
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  // console.log("in the dashboard component", state)
  return {
    liveStreamVideoData: state.liveVideoStreamReducer
  };
}

const connectedDashboard = connect(
  mapStateToProps,
  null
)(withRouter(Dashboard));

export { connectedDashboard as Dashboard };
