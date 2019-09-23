import React, { Component } from "react";

import { messaging } from "../../init-fcm";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import "./notificationData.scss";

import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";

import { Route, Redirect, Link } from "react-router-dom";

import axios from "axios";

class NotificationData extends Component {
  state = {
    redirect: true,
    messages: [],
    showSideBar: true
  };


  // playMethod = async stream => {
  //   let axiosConfig = {
  //     headers: {
  //       "Content-Type":
  //         "X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   };

  //   const response = await axios.post(
  //     "https://vhlvztx86k.execute-api.us-east-1.amazonaws.com/prod/getvideostreambytimestamp",
  //     {
  //       streamName: "RekognitionStream",
  //       startTime: "2019-09-12 18:15:50",
  //       endTime: "2019-09-12 18:15:56"
  //     },
  //     axiosConfig
  //   );
  //   console.log("PLAY Method", stream);
  //   console.log("Response ::>>> ", response);
  // };

  redirectToMethod = () => {
    // <Route
    //   render={<Redirect to={{ pathname: "/messages" }}></Redirect>}
    // ></Route>;
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/message" />;
    }
  };

  
  onClickFn = (data) => {
    console.log('data', data)
    this.setState({
      showSideBar: data
    })
  }

  constructor(props) {
    super(props);
    const dataArr = [];

    messaging.onMessage(async function (payload) {
      const { data } = await payload;
      dataArr.push(data);

      localStorage.setItem("payload", JSON.stringify(dataArr));
    });
  }

  async componentWillMount() {
    const messages = await JSON.parse(localStorage.getItem("payload"));
    this.setState({ messages });
  }

  render() {
    const { messages } = this.state;

    return (
      <React.Fragment>
        <div className="car-management">
          <Header isAuthorized={this.state.isLogin} onClickFn={this.onClickFn}/>
        </div>
        <div className="wrapper" style={{ marginTop: "56px", backgroundColor: "#232838" }}>
        {this.state.showSideBar ? <Sidebar sideBarStatus={this.state.showSideBar} /> : <SidebarCollpase></SidebarCollpase>}

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
                    Messages List
                    <table className="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Image</th>
                          <th scope="col">TimeStamp</th>
                          <th scope="col">Stream</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages && messages.map((message, key) => (
                          <tr key={key}>
                            <th scope="row">{key + 1}</th>
                            <td>{message.ExternalImageId}</td>
                            <td>{message.ServerTimestamp}</td>
                            <td>{message.StreamArn}</td>
                            {/* <td>{`/notificationDetails/${message.ExternalImageId}/${message.ServerTimestamp}`}</td> */}
                            <td>
                              <Link
                                className="btn btn-warning btn-sm"
                                to={`/notificationDetails/${message.ExternalImageId}/${message.ServerTimestamp}`}
                              >
                                Play
                              </Link>
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

export default NotificationData;
