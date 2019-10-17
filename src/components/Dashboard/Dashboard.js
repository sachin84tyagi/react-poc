import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { history } from "../../helpers/history";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import VideoPlayer from "../../helpers/videoPlayer";
import "./dashboard.scss";

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
            controls: true,
            sources: [
              {
                src: data[index].streamUrl,
                type: "application/x-mpegURL"
              }
            ],
            index: "video-container" + index,
            id: "video-js" + index,
            camaraName:  res.stream
            };

        });

        console.log("in dashboard response", videoJsOptionsName);
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
    // console.log("in the render dashboard", videoData);
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
                paddingBottom: "15px",
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
                      <div key = {index} className="row video-rows">
                        {data.map((data, index) => {
                          return (
                            <div
                              className="col-6"
                              style={{ color: "#fff" }}
                              key={index}
                            >
                              <div
                                className={`text-center cccc video-player`}
                              >
                                <div
                                  style={{
                                    boxShadow: "0 0 5px #DAA520",
                                    backgroundColor: "#000"
                                  }}
                                >
                                  <div className = "camara-name">{data.camaraName}</div>
                                  <div
                                    style={this.styleDiv}
                                    className={data.index}
                                  >
                                    <VideoPlayer {...data} key={index} />
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                  
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
