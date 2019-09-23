import React, { Component } from "react";
import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import "./messages.scss";

class Messages extends Component {
  state = {
    visible: true,
    messages: []
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  componentDidMount() {
    const messages = JSON.parse(localStorage.getItem("payload"));
    this.setState({ messages });
  }

  playMethod = stream => {
    console.log("PLAY Method", stream);
  };
  render() {
    const { messages } = this.state;
    console.log(typeof messages);
    return (
      <React.Fragment>
        <div className="car-management">
          <Header isAuthorized={this.state.isLogin} />
        </div>
        <div className="wrapper" style={{ marginTop: "56px", backgroundColor: "#232838" }}>
          {this.state.visible ? <Sidebar /> : ""}

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
                    Messages List
                    <table class="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Image</th>
                          <th scope="col">TimeStamp</th>
                          <th scope="col">Stream</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages.map((message, key) => (
                          <tr id={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{message.ExternalImageId}</td>
                            <td>{message.ServerTimestamp}</td>
                            <td>{message.StreamArn}</td>
                            <td>
                              <button
                                onClick={() =>
                                  this.playMethod(message.StreamArn)
                                }
                              >
                                Play
                              </button>
                            </td>
                          </tr>
                        ))}
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

export default Messages;
