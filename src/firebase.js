import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi60PKwK9TSTOYNYgUNcBHXp1kqBugNeg",
  authDomain: "whatsapp-web-clone-140ac.firebaseapp.com",
  projectId: "whatsapp-web-clone-140ac",
  storageBucket: "whatsapp-web-clone-140ac.appspot.com",
  messagingSenderId: "243723710655",
  appId: "1:243723710655:web:ec478172ffff47a756960a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
