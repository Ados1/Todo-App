import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ContextTheme = ({ children }) => {
  const [darkTheme, setdarkTheme] = useState(true);

  const themeHandler = () => {
    setdarkTheme((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ darkTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextTheme;
