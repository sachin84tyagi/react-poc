import * as firebase from "firebase";
// import firestore from 'firebase/firestore';

//const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyASlLaPIuzJ_1sPhUzrBeQtgO1uAS-bwSk",
  authDomain: "shoplifting-poc.firebaseapp.com",
  databaseURL: "https://shoplifting-poc.firebaseio.com",
  projectId: "shoplifting-poc",
  storageBucket: "",
  messagingSenderId: "384036126880",
  appId: "1:384036126880:web:4543d4974a45cf0f6489c5"
};
firebase.initializeApp(config);
//firebase.firestore().enablePersistence();

export default firebase;
