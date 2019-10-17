import { liveStreamVideoService } from "../services/liveStreamVideo.service";
import { liveVideoStreamConstant } from "../assets/constants/store-constants";

import { history } from "../helpers/history";

export const liveVideoStreamAction = {
  getVideoStream
};

function getVideoStream() {
  return dispatch => {
    liveStreamVideoService.liveStreamVideo().then(resp => {
      console.log("in the live video service", resp);
      if(resp) {
        dispatch({ type: liveVideoStreamConstant.SUCCESS, resp });
        history.push("/dashboard")
      }
    });
  };
}

