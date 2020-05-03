//this way importing only part of firebase functionality
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyCDwSF4Z8lh2VhQdfBYA0rV1FfPplozbbQ',
  authDomain: 'plan-2b285.firebaseapp.com',
  databaseURL: 'https://plan-2b285.firebaseio.com',
  projectId: 'plan-2b285',
  storageBucket: 'plan-2b285.appspot.com',
  messagingSenderId: '1063676851389',
  appId: '1:1063676851389:web:76b98bb4505f094aa5b3d4',
  measurementId: 'G-9NXNNB0Y80',
};
firebase.initializeApp(config);

export default firebase;
