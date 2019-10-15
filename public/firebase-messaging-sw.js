importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
firebase.initializeApp({
  // messagingSenderId: "483892609279",
  messagingSenderId: "384036126880"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  // console.log("setBackgroundMessageHandler Message Payload");
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
