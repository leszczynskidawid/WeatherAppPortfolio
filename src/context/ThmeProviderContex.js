import { darkTheme, lightTheme } from "const/Theme";
import { ThemeProvider } from "styled-components";

const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext(null);

function ProviderContextTheme({ children }) {
  const [theme, setTheme] = useState(false);

  const locastorageTheme = (mode) => {
    localStorage.setItem("theme", mode);
  };

  const toggleTheme = () => {
    setTheme(!theme);
    if (theme) locastorageTheme("ligth");
    else locastorageTheme("dark");
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider
        theme={
          localStorage.getItem("theme") === "ligth" ? lightTheme : darkTheme
        }
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ProviderContextTheme;
