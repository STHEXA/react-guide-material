import React, { createContext, useContext, useState } from "react";
export const ThemeContext = createContext();
const THEMES = ["light", "dark", "red"];
export const MyTheme = createContext(THEMES);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
