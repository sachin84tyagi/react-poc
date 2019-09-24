import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";

import VideoPlayer from "../../helpers/videoPlayer";
import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import "./_weaponDetection.scss";

class WeaponDetection extends Component {
  state = {
    redirect: true,
    messages: [],
    showSideBar: true,
    videoJsOptions: {}
  };

  onClickFn = data => {
    console.log("data", data);
    this.setState({
      showSideBar: data
    });
  };
  constructor(props) {
    super(props);
    // console.log("in face detection component", this.props.messages);
  }

  componentDidMount() {


    const videoJsOptions = {
      autoplay: true,
      controls: false,
      sources: [
        {
          src: this.props.messages[0].VideoURL
        }
      ]
    };

    this.setState({
      videoJsOptions
    });
    console.log("in the weapon detection video componentDidMount ", this.props.messages)

  }

  render() {
    console.log("in the weapon detection video", this.props.messages[0].VideoURL);

    const { videoJsOptions } = this.state;

    // const videoJsOptions = {
    //   autoplay: true,
    //   controls: false,
    //   sources: [
    //     {
    //       src: this.props.messages[0].VideoURL
    //     }
    //   ]
    // };


    return (
      <React.Fragment>
        <div className="car-management">
          <Header
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
                    marginTop: "3%"
                  }}
                >
                  <div className="car-list-header col-md-12">
                    Weapon Detection List

                    <div className="row mt-4">
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
                      </div>
                    </div>

                    <table className="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Bucket</th>
                          <th scope="col">Video Name</th>
                          <th scope="col">Label</th>
                          <th scope="col">Creation Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>{this.props.messages[0].Bucket}</td>
                          <td>{this.props.messages[0].Video}</td>
                          <td>{this.props.messages[0].Label}</td>
                          <td>{this.props.messages[0].CreatedOn}</td>
                          {/* <td>
                              <Link
                                className="btn btn-warning btn-sm"
                                to={`/weaponDetectionDetails//${this.props.messages[0].VideoURL}`}
                              >
                                Play
                              </Link>
                            </td> */}
                        </tr>
                      </tbody>
                    </table>
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

export default WeaponDetection;
