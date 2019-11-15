import firebase from "firebase";
import config from "./config";

firebase.initializeApp(config).firestore();

export default firebase;
