import "firebase/compat/database";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref as sRef } from "firebase/storage";
import { getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
//initialize Firebase
export const app = initializeApp(firebaseConfig);

//Database
export const db = getFirestore(app);

// type Institution = {

//   name: string
//   text: string
//   mapPath: string
//   clickAreaList: [
//     name: string,
//     areaType: string,
//     coordinates: BigInt64Array[],
//     photoPath:string
//   ]

// }
// export const institutionsRef = ref(db, 'institutions/'+ uid)

//storage
const firebaseApp = getApp();
export const storage = getStorage(firebaseApp, "gs://where-map-4ed0e.appspot.com");


