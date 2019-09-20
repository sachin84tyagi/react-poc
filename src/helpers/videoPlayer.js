import React, { Component } from "react";
import videojs from "video.js";
import "./videoPlayer.css";
import "video.js/dist/video-js.css";
//
class VideoPlayer extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.videoHTML = this.videoHTML.bind(this);
  //   }
  // state = {}
  styleDiv = {
    //border: "2px solid red"
  };

  styleDivVideo = {
    //border: "2px solid blue"
  };
  componentDidMount() {
    // instantiate Video.js
    console.log("video props", this.props);
    // this.player = videojs(this.videoNode, this.props.videoOptions, function onPlayerReady() {
    //   // console.log("this.props", this.props);
    // });
    // //let controlBar = document.getElementsByClassName('vjs-control-bar');
    // //console.log('controlBar', this.player.getChild("controlBar"));
    // //controlBar[0].className += " control-bar-pos"
    // //controlBar[0].addClass('control-bar-pos');

    // this.player.on("play", function () {
    //   console.log("Play>>>>>>>>>>");
    //   //e.prevenDefault();
    // })
  }

  componentWillReceiveProps(previosprops, nextprops) {
    //console.log("video props comp",previosprops,nextprops);
    if (this.player) {
      this.player.dispose();
    }
    document.querySelector("div.video-container").innerHTML = this.videoHTML();
    this.player = videojs(
      document.getElementById("video-js"),
      previosprops,
      function onPlayerReady() {
        console.log("this.props again", previosprops);
      }
    );
  }

  videoHTML = () => {
    return (
      "<div data-vjs-player>" +
      '<video className="video-js" id="video-js" />' +
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
    return (
      <div style={this.styleDiv} className="video-container">
        <div data-vjs-player>
          <video
            ref={node => (this.videoNode = node)}
            className="video-js"
            id="video-js"
          />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
