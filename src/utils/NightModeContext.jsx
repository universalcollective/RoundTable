import { createContext, useContext, useState } from 'react';

const NightModeContext = createContext();

export const useNightMode = () => {
  return useContext(NightModeContext);
};

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setisNightMode] = useState(false);

  return (
    <NightModeContext.Provider value={{ isNightMode, setisNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
