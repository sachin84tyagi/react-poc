import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import { alert } from "./alertReducer";
import { footer } from "./footer.reducer";
import { liveVideoStreamReducer } from "./liveVideo.reducer";
import { spinnerStatusReducer } from "./spinner.reducer"

const rootReducer = combineReducers({
  authentication: authentication,
  alert,
  footer,
  liveVideoStreamReducer,
  spinnerStatusReducer
});

export default rootReducer;
