import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LightModeIcon from "@mui/icons-material/LightMode";
export const DetailsWeatherCard = ({ data }) => {
  const unixSunrice = data.data?.sys.sunrise;
  const unixSunSet = data.data?.sys.sunset;
  let sunriseTime = new Date(unixSunrice * 1000).toLocaleTimeString();
  let sunsetTime = new Date(unixSunSet * 1000).toLocaleTimeString();

  return (
    <Grid container spacing={5} sm={12} padding="10px 50px">
      <Grid item xs={12} md={6}>
        <Typography variant="h5">
          <ThermostatIcon />
          temperature
        </Typography>
        <Stack spacing={2}>
          <span>min-temp: {data.data?.main.temp_min}</span>
          <span>max-temp: {data.data?.main.temp_max}</span>
          <span>odczuwalna: {data.data?.main.feels_like}</span>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">
          <FiberManualRecordIcon /> Inne
        </Typography>
        <Stack spacing={2}>
          <span>cisnienie:{data.data?.main.pressure}</span>
          <span>widocznosc: {data.data?.visibility}</span>
          <span>zachmurzenie :{data.data?.main.humidity}%</span>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">
          <AirIcon /> Wiatr
        </Typography>
        <Stack spacing={2}>
          <span>predkosc: {data.data?.wind.speed}m/s</span>
          <span>porywy: {data.data?.wind.gust}m/s </span>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">
          <LightModeIcon /> Dzien
        </Typography>
        <Stack spacing={2}>
          <span>wschod : {sunriseTime}</span>
          <span>zachod: {sunsetTime}</span>
        </Stack>
      </Grid>
    </Grid>
  );
};
