import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

//const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: 'AIzaSyBGyM_1RrGVm3y0pNSLiz7ZbMLii9HfcEw',
  authDomain: 'e-project-4e023.firebaseapp.com',
  databaseURL: 'https://e-project-4e023.firebaseio.com',
  projectId: 'e-project-4e023',
  storageBucket: 'gs://e-project-4e023.appspot.com/',
  messagingSenderId: '994953111174'
  /* apiKey: 'AIzaSyBgp2Vt0nRUdgm5ad_kQGmg5G_B8QIkjoM',
  authDomain: 'e-project-80550.firebaseapp.com',
  databaseURL: 'https://e-project-80550.firebaseio.com',
  projectId: 'e-project-80550',
  storageBucket: 'e-project-80550.appspot.com',
  messagingSenderId: '229180164577',
  appId: '1:229180164577:web:93376c56dc405f58' */
};
firebase.initializeApp(config);
firebase.firestore().enablePersistence();

export default firebase;
