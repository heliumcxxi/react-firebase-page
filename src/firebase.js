import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVYyVPUMWtv-xyfc7qwE1eCQ9Cvv3sOOc",
  authDomain: "userimageupload-e93b5.firebaseapp.com",
  projectId: "userimageupload-e93b5",
  storageBucket: "userimageupload-e93b5.appspot.com",
  messagingSenderId: "162332438327",
  appId: "1:162332438327:web:6d687f36fde164392bf4b2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
