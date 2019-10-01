import { liveVideoStreamConstant } from "../assets/constants/store-constants";

const initialStatus = { liveStreamStatus: true, liveStreamData: {} };

export function liveVideoStreamReducer(state = initialStatus, action) {
//   console.log("in the live stream video reducer", action);
  switch (action.type) {
    case liveVideoStreamConstant.SUCCESS:
      return {
        liveStreamStatus: true,
        liveStreamData: action.resp
      };
    case liveVideoStreamConstant.ERROR:
      return {
        liveStreamStatus: false
      };
    default:
      return state;
  }
}
