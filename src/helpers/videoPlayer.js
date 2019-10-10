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

  componentDidMount() {
    // instantiate Video.js
    // console.log("video props", this.props);
    // this.player = videojs(this.videoNode, this.props.videoOptions, function onPlayerReady() {
    //   // // console.log("this.props", this.props);
    // });
    // //let controlBar = document.getElementsByClassName('vjs-control-bar');
    // //// console.log('controlBar', this.player.getChild("controlBar"));
    // //controlBar[0].className += " control-bar-pos"
    // //controlBar[0].addClass('control-bar-pos');
    // this.player.on("play", function () {
    //   // console.log("Play>>>>>>>>>>");
    //   //e.prevenDefault();
    // })
  }

  componentWillReceiveProps(previosprops, nextprops) {
    if (this.player) {
      this.player.dispose();
    }
    console.log("previosprops000000", previosprops);
    // console.log(
    //   "File VIdeo JS Player Video URL Type componentWillReceiveProps >>>> ",
    //   typeof this.props.index
    // );
    document.querySelector("div.video-container").innerHTML = this.videoHTML(
      "video-js0"
    );
    this.player = videojs(
      document.getElementById("video-js0"),
      previosprops,
      function onPlayerReady() {}
    );
  }

  videoHTML = id => {
    // console.log("videoHTML>>>>>>>>>>>>>", id)
    // if(id === "video-js0") {
    return (
      "<div data-vjs-player>" +
      '<video className="video-js" id="video-js0" />' +
      "\t\t</div>"
    );

    // } else if(id === "video-js1") {
    //   return (
    //     "<div data-vjs-player>" +
    //     '<video className="video-js" id="video-js1" />' +
    //     "\t\t</div>"
    //   );

    // }
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
      <div style={this.styleDiv} className="video-container">
        
      <div key="0" data-vjs-player>
        <video
          ref={node => (this.videoNode = node)}
          className="video-js"
          id="video-js0"
        />
      </div>
      </div>
    );
  }
}

export default VideoPlayer;
