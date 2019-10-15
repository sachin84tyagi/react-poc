import React, { Component } from "react";
import videojs from "video.js";
import "./videoPlayer.css";
import "video.js/dist/video-js.css";
//
class VideoPlayer extends Component {
  
  componentDidMount() {
    console.log("in the videoplayer componentDidMount", this.props)

    if (this.player) {
      this.player.dispose();
    }

    let querySelectorElement = "div." + this.props.index;
    document.querySelector(querySelectorElement).innerHTML = this.videoHTML(
      this.props.id
    );
    this.player = videojs(
      document.getElementById(this.props.id),
      this.props,
      function onPlayerReady() {}
    );
  }

  componentWillReceiveProps(previousProps, nextProps) {
    if (this.player) {
      this.player.dispose();
    }

    let querySelectorElement = "div." + previousProps.index;
    document.querySelector(querySelectorElement).innerHTML = this.videoHTML(
      previousProps.id
    );
    this.player = videojs(
      document.getElementById(previousProps.id),
      previousProps,
      function onPlayerReady() {}
    );
  }

  videoHTML = id => {
    // console.log("in the videoHTML", id)
    let videoHTML = '<video className="video-js" id="video-jsId" />';
    videoHTML = videoHTML.replace("video-jsId", id);
    return "<div data-vjs-player>" + videoHTML + "\t\t</div>";
  };

  componentWillUnmount() {
    // destroy player on unmount
    if (this.player) {
      this.player.dispose();
    }
  }
  render() {
    // console.log("in the videoplayer render", this.props)
    return (
      <div data-vjs-player>
        <video
          ref={node => (this.videoNode = node)}
          className="video-js"
          id={this.props.id}
        />
      </div>
    );
  }
}

export default VideoPlayer;
