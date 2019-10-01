import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import { alert } from "./alertReducer";
import { footer } from "./footer.reducer";
import { liveVideoStreamReducer } from "./liveVideo.reducer"

const rootReducer = combineReducers({
  authentication: authentication,
  alert,
  footer,
  liveVideoStreamReducer
});

export default rootReducer;
