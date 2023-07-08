import React, { useEffect, useState } from "react";

export const FeatureFlags = React.createContext({});

export const FeatureFlagsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [features, setFeatures] = useState({});

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      setFeatures({
        flag1: true,
        flag2: true,
      });
    } else {
      setFeatures({
        showCourses: false,
        flag2: true,
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <FeatureFlags.Provider value={{ features }}>
      {isLoading ? "Loading..." : children}
    </FeatureFlags.Provider>
  );
};
