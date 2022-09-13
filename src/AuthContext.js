import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "./firebase";
import { storage } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState("");

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const upload = async (file, currentUser, setLoading) => {
    const fileRef = ref(storage, currentUser.uid + ".png");

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, { photoURL });
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    upload,
    photo,
    setPhoto,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
