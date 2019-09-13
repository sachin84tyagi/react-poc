import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./dashboard.scss";

import Header from "../../shared/header/header"

import ReactPlayer from "react-player";
import Modal from 'react-responsive-modal';
import { relative } from "path";
import videoPlay from "../../assets/images/play.png";


class Dashboard extends Component {
  state = {
    open: false,
    isFlipped: false,
    _rackData: [],
    selectedIndex: -1,
    openDiv: false,
    isLogin: true,
    arrowClass: "fa fa-angle-down",
    video: [

      { id: 1, name: "Apple Video7.000", url: "https://www.youtube.com/watch?v=LNE86FPjMb4" },
      { id: 2, name: "Apple Video4", url: "https://www.youtube.com/watch?v=IyUhqVxQWK0" }]
  }

  onOpenModal = (id) => {
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

  render() {
    const { open } = this.state;
    console.log("Video Length :::::::: >>>> ", this.state.video.length);
    let calculateDiv = Math.ceil(12 / this.state.video.length);
    // if (calculateDiv >= 12) {
    //   calculateDiv = 3;
    // }
    console.log("calculateDiv >>>>> ", calculateDiv)
    return (
      <React.Fragment>
        <div class="page-wrapper chiller-theme toggled">
          <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
          </a>
          <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
              <div class="sidebar-brand">
                <a href="#">pro sidebar</a>
                <div id="close-sidebar">
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div class="sidebar-header">
                <div class="user-pic">

                </div>
                <div class="user-info">
                  <span class="user-name">Jhon
            <strong>Smith</strong>
                  </span>
                  <span class="user-role">Administrator</span>
                  <span class="user-status">
                    <i class="fa fa-circle"></i>
                    <span>Online</span>
                  </span>
                </div>
              </div>

              <div class="sidebar-search">
                <div>
                  <div class="input-group">
                    <input type="text" class="form-control search-menu" placeholder="Search..." />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar-menu">
                <ul>
                  <li class="header-menu">
                    <span>General</span>
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-tachometer-alt"></i>
                      <span>Dashboard</span>
                      <span class="badge badge-pill badge-warning">New</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Dashboard 1
                    <span class="badge badge-pill badge-success">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">Dashboard 2</a>
                        </li>
                        <li>
                          <a href="#">Dashboard 3</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-shopping-cart"></i>
                      <span>E-commerce</span>
                      <span class="badge badge-pill badge-danger">3</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Products

                  </a>
                        </li>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#">Credit cart</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="far fa-gem"></i>
                      <span>Components</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">General</a>
                        </li>
                        <li>
                          <a href="#">Panels</a>
                        </li>
                        <li>
                          <a href="#">Tables</a>
                        </li>
                        <li>
                          <a href="#">Icons</a>
                        </li>
                        <li>
                          <a href="#">Forms</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-chart-line"></i>
                      <span>Charts</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Pie chart</a>
                        </li>
                        <li>
                          <a href="#">Line chart</a>
                        </li>
                        <li>
                          <a href="#">Bar chart</a>
                        </li>
                        <li>
                          <a href="#">Histogram</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <i class="fa fa-globe"></i>
                      <span>Maps</span>
                    </a>
                    <div class="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Google maps</a>
                        </li>
                        <li>
                          <a href="#">Open street map</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="header-menu">
                    <span>Extra</span>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-book"></i>
                      <span>Documentation</span>
                      <span class="badge badge-pill badge-primary">Beta</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-calendar"></i>
                      <span>Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-folder"></i>
                      <span>Examples</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            <div class="sidebar-footer">
              <a href="#">
                <i class="fa fa-bell"></i>
                <span class="badge badge-pill badge-warning notification">3</span>
              </a>
              <a href="#">
                <i class="fa fa-envelope"></i>
                <span class="badge badge-pill badge-success notification">7</span>
              </a>
              <a href="#">
                <i class="fa fa-cog"></i>
                <span class="badge-sonar"></span>
              </a>
              <a href="#">
                <i class="fa fa-power-off"></i>
              </a>
            </div>
          </nav>
          <div className="car-management">
            <Header isAuthorized={this.state.isLogin} />

          </div>
          <div className="social-box" style={{ background: "#232838", paddingBottom: "200px", paddingTop: "65px" }}>

            <div className="container" style={{ backgroundColor: "#232838" }}>
              <div className="user-list row" style={{ borderBottom: "0px solid #FFF", paddingBottom: "0px", marginBottom: "0px", marginLeft: "0px" }}>
                <div className="car-list-header col-md-12" >
                  Video Information List

              </div>

              </div>
              <div className="row">

                {/* <div class="col-lg-6 col-xs-12 text-center">
                <div class="box" style={{ border: "3px solid #DAA520", marginBottom: "20px", boxShadow: "0 0 5px #FFF" }}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=k2CJoR3F2t0' playing width="200" />
                </div>
              </div>

              <div class="col-lg-6 col-xs-12  text-center">
                <div class="box" style={{ border: "1px solid #FFF", marginBottom: "20px", boxShadow: "0 0 5px #FFF" }}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=qSPaXr2tRbk' playing width="200" />
                </div>
              </div>

              <div class="col-lg-6 col-xs-12 text-center">
                <div class="box" style={{ border: "3px solid #DAA520", marginBottom: "20px" }}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=k2CJoR3F2t0' playing width="200" />
                </div>
              </div> */}

                {/* <div class="col-lg-6 col-xs-12  text-center">
                <div class="box" style={{ border: "2px solid #DAA520", marginBottom: "20px", boxShadow: "0 0 5px #DAA520" }}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=qTdyVWJ1lsI' playing width="100%" />
                </div>
              </div>

              <div class="col-lg-6 col-xs-12  text-center">
                <div class="box" style={{ border: "2px solid #DAA520", marginBottom: "20px", boxShadow: "0 0 5px #DAA520" }}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=fu9ZGnKOozs' playing width="200" />
                </div>
              </div> */}

                {/* <div class="col-lg-12 col-xs-12  text-center" style={{
                borderBottom: "2px solid #FFF", margin: "1px 14px 19px 14px"
              }}></div> */}
                {/* < div class="col-lg-6 col-xs-12  text-center" >
                <div class="box" style={{ border: "2px solid #DAA520", marginBottom: "20px", boxShadow: "0 0 5px #DAA520" }}>
                  <ReactPlayer url='https://www.youtube.com/watch?v=LNE86FPjMb4' playing width="200" />
                </div>
              </div> */}
                {/* <div>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                  <ReactPlayer url='https://www.youtube.com/watch?v=qTdyVWJ1lsI' playing />
                </Modal>
              </div> */}



                {/* {this.state.video.map((videoData) => (
                <div class={`col-lg-${calculateDiv} text-center`}>

                  <div class="box" style={{ marginBottom: "20px", boxShadow: "0 0 5px #DAA520" }}>
                    <ReactPlayer url={videoData.url} playing width="200" height="100" />
                  </div>
                </div>
              ))} */}



                {this.state.video.map((videoData) => (
                  <div key={videoData.id} className={`col-lg-${calculateDiv} text-center`} >
                    <div onClick={() => this.onOpenModal(videoData.id)} style={{ marginBottom: "20px", backgroundColor: "#000", cursor: "pointer" }}>
                      <div className="box" style={{ boxShadow: "0 0 5px #DAA520", backgroundColor: "#000" }} >
                        <i class="fa fa-play-circle" style={{ fontSize: "62px", lineHeight: "160px" }}></i>

                      </div>
                    </div>
                    {videoData.url}
                    <Modal open={open[videoData.id]} onClose={this.onCloseModal} center>
                      <h2>Video Play Information #{videoData.id}</h2>
                      <ReactPlayer url={videoData.url} playing />
                    </Modal>
                  </div>
                ))}





              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Dashboard;
