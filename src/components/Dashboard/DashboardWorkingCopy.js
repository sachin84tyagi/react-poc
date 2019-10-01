import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./dashboard.scss";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";

import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import { relative } from "path";
import videoPlay from "../../assets/images/play.png";

class Dashboard extends Component {
  state = {
    visible: false,
    open: false,
    isFlipped: false,
    _rackData: [],
    selectedIndex: -1,
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    video: [
      {
        id: 1,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 2,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 3,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 4,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 5,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 6,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 7,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 8,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 9,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 10,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },

      {
        id: 11,
        name: "Apple Video7.000",
        url: "https://www.youtube.com/watch?v=LNE86FPjMb4"
      },
      {
        id: 12,
        name: "Apple Video4",
        url: "https://www.youtube.com/watch?v=IyUhqVxQWK0"
      }
    ]
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

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { open } = this.state;
    let calculateDiv = Math.ceil(12 / this.state.video.length);
    if (calculateDiv <= 2) {
      calculateDiv = 2;
    }
    // console.log("State Visibility :::::::::::: ", this.state.visible);

    return (
      <React.Fragment>
        <div className="car-management">
          <Header isAuthorized={this.state.isLogin} />
        </div>
        <div class="wrapper" style={{ marginTop: "56px" }}>
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
                    <nav class="navbar navbar-expand-lg navbar-light navbarAdditionClass">
                      <button
                        type="button"
                        id="sidebarCollapse"
                        class="btn btn-info"
                        onClick={this.toggleMenu}
                      >
                        <i class="fas fa-align-left"></i>
                      </button>
                    </nav>
                    Video Information List
                  </div>
                </div>
                <div className="row">
                  {this.state.video.map(videoData => (
                    <div
                      key={videoData.id}
                      className={`col-lg-${calculateDiv} text-center`}
                    >
                      <div
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
                      </div>
                      <div
                        style={{
                          color: "#d19b3d",
                          fontSize: "13px",
                          marginBottom: "40px"
                        }}
                      >
                        {videoData.name}
                      </div>
                      <Modal
                        open={open[videoData.id]}
                        onClose={this.onCloseModal}
                        center
                      >
                        <h6>Video Play Information #{videoData.id}</h6>
                        <ReactPlayer url={videoData.url} playing />
                      </Modal>
                    </div>
                  ))}
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
