import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }


  const updateUserProfile = (profile) => {
    return updateUserProfile(auth.currentUser, profile);
  }



const verifyEmail = () => {
  return sendEmailVerification(auth.currentUser);
}

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser === null || currentUser.emailVerified){
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    }
  }, []);



  const authInfo = {
    verifyEmail,
    user,
    providerLogin,
    logOut,
    createUser,
    signIn,
    loading,
    updateUserProfile,
    setLoading
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;