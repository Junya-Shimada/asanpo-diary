
// firebase の初期化
firebase.initializeApp(firebaseConfig);
firebase.getStorage(firebaseConfig);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdBV0um0BgYYjqbk5c5DBQz7OrUoJGUvE",
  authDomain: "asanpo-diary-780de.firebaseapp.com",
  projectId: "asanpo-diary-780de",
  storageBucket: "asanpo-diary-780de.appspot.com",
  messagingSenderId: "1009966601653",
  appId: "1:1009966601653:web:088a6553bb8ee39e0275fc"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export default storage;