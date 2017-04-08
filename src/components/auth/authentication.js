import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC8Xudkckmh2b6MAVzBjLw7uBKD7kBIIMc',
  authDomain: 'topicwhiz-abc1f.firebaseapp.com',
  databaseURL: 'https://topicwhiz-abc1f.firebaseio.com',
  projectId: 'topicwhiz-abc1f',
  storageBucket: 'topicwhiz-abc1f.appspot.com',
  messagingSenderId: '738263700621'
  };
export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();
