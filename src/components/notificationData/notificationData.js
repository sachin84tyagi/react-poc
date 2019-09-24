import React, { Component } from "react";

import { messaging } from "../../init-fcm";

import Header from "../../shared/header/header";
import Sidebar from "../../shared/sidebar/sidebar";
import "./notificationData.scss";

import SidebarCollpase from "../../shared/sidebar/sideBarCollapse";
import FaceDetection from "../faceDetection/faceDetection";
import WeaponDetection from "../weaponDetection/weaponDetection";

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

  onClickFn = data => {
    console.log("data", data);
    this.setState({
      showSideBar: data
    });
  };

  constructor(props) {
    super(props);
    const dataArr = [];

    messaging.onMessage(async function (payload) {
      const { data } = await payload;

      if (data.EventOn && data.EventOn != "") {
        const jsonArr = [];
        //console.log("Event On")
        jsonArr.push(data)
        localStorage.setItem("payload", JSON.stringify(jsonArr));
      } else {
        //console.log("Push Data")
        dataArr.push(data);
        localStorage.setItem("payload", JSON.stringify(dataArr));
      }




    });
  }

  async componentWillMount() {
    const messages = await JSON.parse(localStorage.getItem("payload"));
    console.log("in the notification data", messages);
    this.setState({ messages });
  }

  render() {
    const { messages } = this.state;

    return messages[0] && messages[0].EventOn == "S3Video" ? (

      <WeaponDetection messages={this.state.messages}></WeaponDetection>
    ) : (
        <FaceDetection messages={this.state.messages}></FaceDetection>
      );
  }
}

export default NotificationData;
