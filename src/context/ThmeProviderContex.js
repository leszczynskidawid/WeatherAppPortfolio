import { darkTheme, lightTheme } from "const/Theme";
import { ThemeProvider } from "styled-components";

const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext(null);

function ProviderContextTheme({ children }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ProviderContextTheme;
