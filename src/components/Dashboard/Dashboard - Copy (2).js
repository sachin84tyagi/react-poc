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
      { id: 2, name: "Apple Video7.000", url: "https://www.youtube.com/watch?v=LNE86FPjMb4" },

      { id: 7, name: "Apple Video7.000", url: "https://www.youtube.com/watch?v=LNE86FPjMb4" },
      { id: 8, name: "Apple Video4", url: "https://www.youtube.com/watch?v=IyUhqVxQWK0" }
    ]
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
    // console.log("open open Value::::::::  >>>> ", open);
    // console.log("Video Length :::::::: >>>> ", this.state.video.length);
    let calculateDiv = Math.ceil(12 / this.state.video.length);
    // if (calculateDiv >= 12) {
    //   calculateDiv = 3;
    // }
    // console.log("calculateDiv >>>>> ", calculateDiv)
    return (
      <React.Fragment>

        <div className="car-management">
          <Header isAuthorized={this.state.isLogin} />

        </div>



        <div className="social-box" style={{ background: "#232838", paddingBottom: "200px", paddingTop: "65px" }}>

          <div className="container" style={{ backgroundColor: "#232838" }}>

            <div class="sidebar">
              <nav class="sidebar-nav">
                <ul class="nav">
                  <li class="nav-title">Nav Title</li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="nav-icon cui-speedometer"></i> Nav item
        </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="nav-icon cui-speedometer"></i> With badge
          <span class="badge badge-primary">NEW</span>
                    </a>
                  </li>
                  <li class="nav-item nav-dropdown">
                    <a class="nav-link nav-dropdown-toggle" href="#">
                      <i class="nav-icon cui-puzzle"></i> Nav dropdown
        </a>
                    <ul class="nav-dropdown-items">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="nav-icon cui-puzzle"></i> Nav dropdown item
            </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="nav-icon cui-puzzle"></i> Nav dropdown item
            </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item mt-auto">
                    <a class="nav-link nav-link-success" href="https://coreui.io">
                      <i class="nav-icon cui-cloud-download"></i> Download CoreUI</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nav-link-danger" href="https://coreui.io/pro/">
                      <i class="nav-icon cui-layers"></i> Try CoreUI
          <strong>PRO</strong>
                    </a>
                  </li>
                </ul>
              </nav>
              <button class="sidebar-minimizer brand-minimizer" type="button"></button>
            </div>

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
                  <div style={{ color: "#FFF", fontSize: "13px", marginBottom: "40px" }}>{videoData.name}</div>
                  <Modal open={open[videoData.id]} onClose={this.onCloseModal} center>
                    <h6>Video Play Information #{videoData.id}</h6>
                    <ReactPlayer url={videoData.url} playing />
                  </Modal>
                </div>
              ))}





            </div>
          </div>
        </div>

      </React.Fragment >
    );
  }
}

export default Dashboard;
