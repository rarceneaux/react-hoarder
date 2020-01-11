import firebase from 'firebase/app';
import apiKeys from '../apiKeys.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseKeys);
  }
};

export default firebaseApp;
