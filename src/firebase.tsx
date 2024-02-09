// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqmz_nra8AwugR_10dJmBCfvsB-f00aQI",
  authDomain: "nwitter-reloaded-c2a5f.firebaseapp.com",
  projectId: "nwitter-reloaded-c2a5f",
  storageBucket: "nwitter-reloaded-c2a5f.appspot.com",
  messagingSenderId: "121790314761",
  appId: "1:121790314761:web:4380428762210a0fd3bbd8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
