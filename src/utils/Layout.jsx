import React, { useState } from "react";
import { NightModeContext } from "../utils/NightModeContext";

function Layout({ children }) {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`layout ${isNightMode ? "night-mode" : ""}`}>
      <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
        {children}
      </NightModeContext.Provider>
    </div>
  );
}

export default Layout;
