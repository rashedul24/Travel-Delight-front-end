import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };
  // state observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => { })
    .finally(()=>setIsLoading(false))
  };
  

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading
  };
};
export default useFirebase;
