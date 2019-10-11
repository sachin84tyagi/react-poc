import { userConstants } from "../assets/constants/store-constants";
import { authService } from "../services/authService";
import { alertActions } from "./alertActions";
import { liveVideoStreamAction } from "./liveVideo.actions";
// import { history } from "../helpers/history";

export const userAuthActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    authService.login(username, password).then(
      user => {
        if (user) {
          dispatch(request({ username }));
          // history.push("/dashboard")
          dispatch(liveVideoStreamAction.getVideoStream())
        } else {
          dispatch(alertActions.error("Invalid Login Details."));
        }
      },
      error => {
        dispatch(alertActions.error("Failed"));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();
  return { type: userConstants.LOGOUT };
}
