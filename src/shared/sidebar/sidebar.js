import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { liveVideoStreamAction } from "../../actions/liveVideo.actions";
import { spinnerStatusAction } from "../../actions/spinner.action"

import "./_sidebar.scss";

class Sidebar extends Component {
  backToLiveStream = async () => {
    await this.props.spinnerStatus(false)
    await this.props.liveStream();

  };
  backToNotificationData = async () => {
    await this.props.spinnerStatus(true)

  };

  render() {
    return (
      <React.Fragment>
        <nav id="sidebar">
          <br />

          <ul className="list-unstyled components">
            <li>
              <Link to="/dashboard">
                <i className="fas fa-image"></i>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/streamData">
                <i className="fas fa-image"></i>
                Stream Data
          </Link>
            </li>
            <li>
              <span onClick={this.backToLiveStream} className="link-reference">
                <i className="fas fa-image"></i>
                Live Stream
              </span>
            </li><li>
              <Link onClick={this.backToNotificationData} to="/streamDataList">
                <i className="fas fa-image"></i>
                Stream Data History
              </Link>
            </li>
            <li>
              <Link onClick={this.backToNotificationData} to="/notificationData">
                <i className="fas fa-image"></i>
                Notification Messages
              </Link>
            </li>
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fas fa-home"></i>
                Home
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#"> Home 1</a>
                </li>
                <li>
                  <a href="#"> Home 2</a>
                </li>
                <li>
                  <a href="#"> Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-briefcase"></i>
                About
              </a>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fas fa-copy"></i>
                Pages
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-image"></i>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question"></i>
                FAQ
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-paper-plane"></i>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log("in the sidebar", state)
  return state;
}

const mapDispatchToProps = {
  liveStream: liveVideoStreamAction.getVideoStream,
  spinnerStatus: spinnerStatusAction.changeSpinnerStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
