import Firebase from "firebase";
import "firebase/firestore";
import { config } from "./firebaseConfig.js";

const firebaseApp = Firebase.initializeApp(config, "exercise-vue");
const firestore = firebaseApp.firestore();

export default firestore;
export const db = firebaseApp.firestore();
