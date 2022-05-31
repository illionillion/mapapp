import "firebase/compat/database";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage, ref as sRef } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appId: process.env.FIREBASE_APP_ID,
};
//initialize Firebase
export const app = initializeApp(firebaseConfig);

//Database
export const db = getDatabase(app);

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
export const storage = getStorage(app);
export const storageRef = sRef(storage);
