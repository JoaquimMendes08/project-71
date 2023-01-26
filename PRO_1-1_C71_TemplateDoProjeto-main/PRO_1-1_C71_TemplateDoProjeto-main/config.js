import firebase from "firebase";
require("@firebase/firestore");
  //Cole sua Configuração do Firebase aqui
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyDiAItevaxQ5qQlpA9cVki1F8ZBVFGwwr8",
  authDomain: "project-71-97eb4.firebaseapp.com",
  databaseURL: "https://project-71-97eb4-default-rtdb.firebaseio.com",
  projectId: "project-71-97eb4",
  storageBucket: "project-71-97eb4.appspot.com",
  messagingSenderId: "31821295074",
  appId: "1:31821295074:web:92ed94d9aff9ff2cdb5dbb",
  measurementId: "G-42J76H9TES"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
