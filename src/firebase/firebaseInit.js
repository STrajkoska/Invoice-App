import { def } from '@vue/shared';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCqiMclvz0IX9BV48oxAfrrY8zsM5BWH-g",
    authDomain: "invoice-app---yt.firebaseapp.com",
    projectId: "invoice-app---yt",
    storageBucket: "invoice-app---yt.appspot.com",
    messagingSenderId: "386149381719",
    appId: "1:386149381719:web:124c7989b284e2c19d1512"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp.firestore();