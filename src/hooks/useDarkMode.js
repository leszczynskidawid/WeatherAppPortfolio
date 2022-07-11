import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return [theme, toggleTheme];
};
