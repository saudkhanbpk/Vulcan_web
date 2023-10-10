import { useEffect, useState } from "react";
import { auth } from "../config";

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("User Data", user)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [user]);
  return {
    user,
    loading,
  };
};
export default useAuthentication;
