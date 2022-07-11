import { Box, Stack } from "@mui/material";
import { Nav } from "components/molecules/Nav";
import { MainPage } from "Page/Main";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "hooks/useDarkMode";
import { lightTheme, darkTheme } from "const/Theme";
import { GlobalStyles } from "Styles/GlobalStyle";
import ProviderContextTheme from "context/ThmeProviderContex";

function App() {
  // const [theme, toggleTheme] = useDarkMode();

  // const themeMode = theme ? lightTheme : darkTheme;

  return (
    <ProviderContextTheme>
      <GlobalStyles />
      <Box>
        <Nav />
        <Stack>
          <MainPage />
        </Stack>
      </Box>
    </ProviderContextTheme>
  );
}

export default App;
