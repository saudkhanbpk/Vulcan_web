import React, { useEffect, useState } from "react";

export const FeatureFlags = React.createContext({});

export const FeatureFlagsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [features, setFeatures] = useState({});

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      setFeatures({});
    } else {
      setFeatures({
        showCourses: true,
        flag2: false,
        emailVerified: false
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <FeatureFlags.Provider value={{ features, setFeatures }}>
      {isLoading ? "Loading..." : children}
    </FeatureFlags.Provider>
  );
};
