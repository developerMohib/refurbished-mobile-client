import Proptypes from "prop-types";
import auth from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AuthCustomContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // sign up or create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in or login
  const loginEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };
    // google sign in
    const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };

  // update profile
  const updateUser = (name, photoURL) => {
    return updateProfile(auth?.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  }

  // user observer
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
        setLoading(false);
      }
      else{
        setLoading(false);
      }
    });
    return () => unsubscriber();
  }, []);

  // log out
  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  const userInfo = { createUser, loading,setLoading, loginEmailPass, user, updateUser, logOut,loginWithGoogle};
  return (
    <AuthCustomContext.Provider value={userInfo}>
      {children}
    </AuthCustomContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: Proptypes.node,
};
export default AuthProvider;
