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
    showSideBar: true
  };

  async componentDidMount() {
    let axiosConfig = {
      headers: {
        "Content-Type":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
      }
    };
    const { data } = await axios.get(
      "https://ubs2syt3te.execute-api.us-east-1.amazonaws.com/prod/getlivestream",
      axiosConfig
    );
    console.log("Response Data ::::: ", data);
    //const { videoJsOptions } = { ...this.state };
    //const URL =
    //"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    //videoJsOptions.sources[0].src =
    //"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    // console.slog("videoData >>>>>> ", data);
    //console.log("videoJsOptions ---------------->>>>>> ", videoJsOptions);
    //console.log("videoData src src >>>>>> ", this.state.videJsOptions);
    //this.setState({ src: data });

    /////////////
    // const messaging = firebase.messaging();
    // messaging
    //   .requestPermission()
    //   .then(function() {
    //     console.log("Have Permission");
    //     return messaging.getToken();
    //   })
    //   .then(function(token) {
    //     console.log("Token Value >>>>>>", token);
    //   })
    //   .catch(function(err) {
    //     console.log("Error Occured", err);
    //   });

    // messaging.onMessage(function(payload) {
    //   console.log("On Message Payload ::::>>>>>>> ", payload);
    // });

    /////////////////
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
    console.log("data", data);
    this.setState({
      showSideBar: data
    });
  };

  render() {
    const { open, video, videoJsOptions } = this.state;
    console.log("Video :::::>>>>> ", video);
    console.log("videoJsOptions :::::>>>>> ", videoJsOptions.sources);
    // const videoJsOptions = {
    //   autoplay: true,
    //   controls: false,
    //   sources: [
    //     {
    //       src:
    //         "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    //       type: "video/mp4"
    //     }
    //   ]
    // };

    let calculateDiv = Math.ceil(12 / this.state.video.length);
    calculateDiv = 6;
    if (calculateDiv <= 2) {
      calculateDiv = 2;
    }
    console.log("State Visibility :::::::::::: ", this.state.visible);

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
                <div className="row">
                  {
                    //this.state.video &&
                    //this.state.video.map(videoData => (
                    <div
                      className={`col-lg-${calculateDiv} text-center video-player`}
                    >
                      {/* <div
                        onClick={() => this.onOpenModal(videoData.id)}
                        style={{
                          marginBottom: "20px",
                          backgroundColor: "#000",
                          cursor: "pointer"
                        }}
                      >
                        <div
                          className="box"
                          style={{
                            boxShadow: "0 0 5px #DAA520",
                            backgroundColor: "#000"
                          }}
                        >
                          <i
                            class="fa fa-play-circle"
                            style={{ fontSize: "62px", lineHeight: "160px" }}
                          ></i>
                        </div>
                      </div> */}
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
                      >
                        {
                          //videoData.name
                        }
                      </div>
                      {/* <Modal
                        open={open[videoData.id]}
                        onClose={this.onCloseModal}
                        center
                      >
                        <h6>Video Play Information #{videoData.id}</h6>
                        <ReactPlayer url={videoData.url} playing />
                      </Modal> */}
                    </div>
                    //))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
