import { GridContainer } from "./style";
import { StyledIconContainer } from "./style";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const WeatherInfoCard = ({ data }) => {
  const icon = `https://openweathermap.org/img/wn/${data.data?.weather[0].icon}.png`;

  return (
    <GridContainer>
      <Typography variant="h6">
        <LocationOnIcon /> {data.data?.name}
      </Typography>
      <StyledIconContainer>
        <img
          style={{ width: "200px", height: "200px" }}
          src={`${icon}`}
          alt="dasdhka"
        />
      </StyledIconContainer>
      <Typography variant="h4">{data.data?.weather[0].description}</Typography>
      <Typography variant="h2">
        {" "}
        {data.data?.main.temp}
        <sup>o</sup>C
      </Typography>
    </GridContainer>
  );
};
