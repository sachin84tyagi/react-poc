import axios from "axios";
//import { askForPermissioToReceiveNotifications } from "../../push-notification";
import { askForPermissioToReceiveNotifications } from "../push-notification";

export const authService = {
  login: (username, password) => {
    //var loginObj = { username: username, password: password, rememberMe: true };
    var loginObj = { username: "test", password: "test" };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios
      .post(
        "http://www.mocky.io/v2/5d70deeb3300001221779525",
        loginObj,
        axiosConfig
      )
      .then(response => {
        if (response.status === 200) {
          if (!localStorage.getItem("notification-token")) {
            askForPermissioToReceiveNotifications();
          }
          var loggedInObj = { loggedIn: true };
          //var userData = JSON.parse(response.config.data);

          var userData = {
            name: "Sachin Tyagi"
          };
          console.log("userData >>>>>>>>>> ", userData);
          delete userData.password;
          userData = Object.assign(userData, loggedInObj);

          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("user-login-jwt", response.data.id_token);
          return userData;
        }
      })
      .catch(error => {
        return false;
      });
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-login-jwt");
    return true;
  }
};
