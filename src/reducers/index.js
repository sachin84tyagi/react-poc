import { combineReducers } from "redux";
import { authentication } from "./authReducer";
import { alert } from "./alertReducer";
import { footer } from "./footer.reducer";

const rootReducer = combineReducers({
  authentication: authentication,
  alert,
  footer
});

export default rootReducer;
