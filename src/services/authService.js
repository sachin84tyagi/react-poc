import axios from "axios";
//import { askForPermissioToReceiveNotifications } from "../../push-notification";
import { askForPermissioToReceiveNotifications } from "../push-notification";

export const authService = {
  login: (username, password) => {
    //var loginObj = { username: username, password: password, rememberMe: true };
    var loginObj = { userName: username, password: password };
    // console.log("in the login service", loginObj)
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios
      .post(
        "http://ec2-54-172-220-197.compute-1.amazonaws.com:8080/usermgmt/users/login",
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
          // console.log("userData >>>>>>>>>> ", userData);
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

  signUp: (user) =>{
    // console.log("xvschxcxjcjh", user)
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    return axios
      .post(
        "http://ec2-54-172-220-197.compute-1.amazonaws.com:8080/usermgmt/users",
        user,
        axiosConfig
      ).then(response => {
        // console.log("in signup auth service", response)
        return response
      })
      .catch(err => {
        // console.log("in the error signup auth service", err)
      })
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-login-jwt");
    return true;
  }
};
