import { Box, Stack } from "@mui/material";
import { Nav } from "components/molecules/Nav";
import { MainPage } from "Page/Main";
import { GlobalStyles } from "Styles/GlobalStyle";
import ProviderContextTheme from "context/ThmeProviderContex";

function App() {
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
