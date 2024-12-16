import { createContext, useEffect, useState } from "react";
import {
  getLocaleStorageItem,
  setLocaleStorageItem,
} from "../Utils/localeStorage";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    getLocaleStorageItem("theme") || {
      isDark: false,
    }
  );

  // { small: false, open: true }

  useEffect(() => {
    const body = document.querySelector("body");
    setLocaleStorageItem("theme", theme);
    if (theme.isDark) {
      body.classList.add("dark");
      body.classList.add("dark-mode");
    } else {
    }
    body.classList.remove("dark");
    body.classList.remove("dark-mode");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
