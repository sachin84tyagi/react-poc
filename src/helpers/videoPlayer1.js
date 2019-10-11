import React, { Component } from "react";
import videojs from "video.js";
import "./videoPlayer.css";
import "video.js/dist/video-js.css";
//
class VideoPlayer1 extends Component {
 
  componentWillReceiveProps(previosprops, nextprops) {
    if (this.player) {
      this.player.dispose();
    }
    // console.log("previosprops11111111111", previosprops);
    document.querySelector("div.video-container1").innerHTML = this.videoHTML(
      "video-js1"
    );
    this.player = videojs(
      document.getElementById("video-js1"),
      previosprops,
      function onPlayerReady() {}
    );
  }

  videoHTML = id => {
    // console.log("videoHTML>>>>>>>>>>>>>", id)
    return (
      "<div data-vjs-player>" +
      '<video className="video-js" id="video-js1" />' +
      "\t\t</div>"
    );
  };

  componentWillUnmount() {
    // destroy player on unmount
    if (this.player) {
      this.player.dispose();
    }
  }
  render() {
    // console.log("in the video player>>>>>>>>>>>>..", this.props);

    return (
      <div key="1" data-vjs-player>
        <video
          ref={node => (this.videoNode = node)}
          className="video-js"
          id="video-js1"
        />
      </div>
    );
  }
}

export default VideoPlayer1;
