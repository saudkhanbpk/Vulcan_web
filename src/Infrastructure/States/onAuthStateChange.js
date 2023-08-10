import { useEffect, useState } from "react";
import { auth } from "../config";
import { updateProfile } from "firebase/auth";

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const updateUserDisplayName = ({newDisplayName}) => {
    if (user) {
      updateProfile(auth.currentUser,{
        displayName: newDisplayName,
      })
      .then(() => {
        setUser({ ...user, displayName: newDisplayName });
      })
      .catch((error) => {
        console.error("Error updating display name:", error.message);
      });
    }
  };

  return {
    user,
    loading,
    updateUserDisplayName
  };
};

export default useAuthentication;
