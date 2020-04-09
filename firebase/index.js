import firebase from "firebase/app";
import Client from "./Client";
import config from "./config";
import "firebase/firestore";

firebase.initializeApp(config).firestore();

const fbClient = new Client(firebase);

export { firebase, Client, fbClient, config };
