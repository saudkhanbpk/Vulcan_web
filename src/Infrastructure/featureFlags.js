import React, { useEffect, useState } from "react";
import useAuthentication from "./States/onAuthStateChange";

export const FeatureFlags = React.createContext({});

export const FeatureFlagsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [features, setFeatures] = useState({});
  const { user } = useAuthentication()
  useEffect(() => {
    const emailVerifiedValue = user?.emailVerified;
    if (process.env.NODE_ENV === "production") {
      setFeatures({});
    } else {
      setFeatures({
        showCourses: true,
        flag2: false,
        emailVerified: emailVerifiedValue
      });
    }
    setIsLoading(false);
  }, [user]);
  return (
    <FeatureFlags.Provider value={{ features, setFeatures }}>
      {isLoading ? "Loading..." : children}
    </FeatureFlags.Provider>
  );
};
