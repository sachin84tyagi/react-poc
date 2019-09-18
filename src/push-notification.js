import * as firebase from "firebase";
import axios from "axios";
export const initializeFirebase = () => {
  const config = {
    // messagingSenderId: "483892609279"
    messagingSenderId: "384036126880"
  };
  //firebase.initializeApp(config);
  // navigator.serviceWorker.register("/service-worker.js").then(registration => {
  //   firebase.messaging().useServiceWorker(registration);
  // });
};
export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();

    let token = await messaging.getToken();
    console.log("before delete token :", token);
    if (token) {
      await messaging.deleteToken(token);
      token = await messaging.getToken();
      console.log("token :", token);
    }

    localStorage.setItem("notification-token", token);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    axios.put(
      "https://jwrr2fa8mf.execute-api.us-east-1.amazonaws.com/p3/notificationtoken",
      {
        owner: user.owner,
        notificationToken: token.toString()
      }
    );
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const getFirebaseTokenData = async () => {
  try {
    const messaging = firebase.messaging();
    //await messaging.requestPermission();

    let token = await messaging.getToken();
    console.log("before delete token :", token);
    if (token) {
      await messaging.deleteToken(token);
      token = await messaging.getToken();
      console.log("token :", token);
    }

    //localStorage.setItem("notification-token", token);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    // axios.put(
    //   "https://jwrr2fa8mf.execute-api.us-east-1.amazonaws.com/p3/notificationtoken",
    //   {
    //     owner: user.owner,
    //     notificationToken: token.toString()
    //   }
    // );
    return token;
  } catch (error) {
    console.error(error);
  }
};
