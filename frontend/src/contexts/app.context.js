import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [choosen, setChoosen] = useState(null);

  return (
    <AppContext.Provider value={{ choosen, setChoosen }}>
      {children}
    </AppContext.Provider>
  );
};
