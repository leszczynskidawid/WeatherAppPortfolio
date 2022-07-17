import { GridContainer } from "./style";
import { StyledIconContainer } from "./style";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const WeatherInfoCard = ({ data }) => {
  const icon = `https://openweathermap.org/img/wn/${data.data?.weather[0].icon}.png`;
  const temeprature = data.data?.main.temp.toFixed(0);

  return (
    <GridContainer>
      <Typography variant="h4">
        <LocationOnIcon /> {data.data?.name}
      </Typography>

      <StyledIconContainer>
        <img src={`${icon}`} alt={data.data?.weather[0].description} />
      </StyledIconContainer>
      <Typography variant="h6">{data.data?.weather[0].description}</Typography>
      <Typography variant="h2">
        {temeprature}
        <sup>o</sup>C
      </Typography>
    </GridContainer>
  );
};
