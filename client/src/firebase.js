import firebase from "firebase/app"
import "firebase/auth"

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAMING_3aO4piEjYmsTuCu-cjDDWtrqHiQ",
  authDomain: "ecommerce-website-4cf76.firebaseapp.com",
  projectId: "ecommerce-website-4cf76",
  storageBucket: "ecommerce-website-4cf76.appspot.com",
  messagingSenderId: "264515759027",
  appId: "1:264515759027:web:51f69ee461f3fea267b9c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

