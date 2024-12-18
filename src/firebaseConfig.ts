// Import the necessary Firebase modules
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config here
const firebaseConfig = {
	apiKey: "xxxxxxxxxxxxxxx",
	authDomain: "xxxxxxxxxxxxxxx",
	projectId: "xxxxxxxxxxxxxxx",
	storageBucket: "xxxxxxxxxxxxxxx",
	messagingSenderId: "xxxxxxxxxxxxxxx",
	appId: "xxxxxxxxxxxxxxx",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
