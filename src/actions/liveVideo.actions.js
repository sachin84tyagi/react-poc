import { liveStreamVideoService } from "../services/liveStreamVideo.service";
import { liveVideoStreamConstant } from "../assets/constants/store-constants";

export const liveVideoStreamAction = {
  getVideoStream
};

function getVideoStream() {
  return dispatch => {
    liveStreamVideoService.liveStreamVideo().then(resp => {
      console.log("in the live video service", resp);
      dispatch({ type: liveVideoStreamConstant.SUCCESS, resp });
    });
  };
}

