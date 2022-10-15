import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDjy1Lc6h69CyDd_e9TiOd1vVjtXPqdORo",
    authDomain: "softapp-mern.firebaseapp.com",
    projectId: "softapp-mern",
    storageBucket: "softapp-mern.appspot.com",
    messagingSenderId: "933661795595",
    appId: "1:933661795595:web:4435e9af00b0950ba82e0e"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage