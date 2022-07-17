import { Nav } from "components/molecules/Nav";
import { MainPage } from "components/organism/MainConentWeather/Main";
import { Box } from "@mui/system";
export const HomePage = () => {
  return (
    <Box>
      <Nav />
      <MainPage />
    </Box>
  );
};
