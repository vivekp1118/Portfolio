import React, { useState, useEffect, createContext } from "react";

const MobileContext = createContext();

function MobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 468);
    };

    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 30 seconds
    }, 9000);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{isMobile,isLoading}}>
      {children}
    </MobileContext.Provider>
  );
}

export { MobileProvider, MobileContext };
