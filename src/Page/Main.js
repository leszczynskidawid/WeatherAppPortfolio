import { useEffect } from "react";
import { StyledBox, StyledContainer } from "./style";
import { WeatherInfoCard } from "components/molecules/WeatherInfoCard/WeatherInfoCard";
import { useApiDataTypesMethod } from "const/apiClientMehod";
import { useWatherContext } from "context/watherDataContext";
import { CircularProgressLoader } from "components/atoms/CircularProgressLoader/CircularProgressLoader";
import { DetailsWeatherCard } from "components/organism/DetailsWeatherCard";

const getPosition = () => {
  return new Promise((resolve, rejcet) => {
    navigator.geolocation.getCurrentPosition(resolve, rejcet);
  });
};

export const MainPage = () => {
  const { getWeatherByLocationUser } = useApiDataTypesMethod();
  const { weatherData, setWeatherData, loader, setLoader } = useWatherContext();

  useEffect(() => {
    (async function getWeather() {
      try {
        setLoader(true);
        const posi = await getPosition();
        const res = await getWeatherByLocationUser(
          posi.coords.latitude,
          posi.coords.longitude,
        );

        if (res) {
          setWeatherData(res);
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <StyledContainer>
      {loader ? (
        <CircularProgressLoader />
      ) : (
        <>
          <StyledBox>
            <WeatherInfoCard data={weatherData} />
          </StyledBox>
          <StyledBox>
            <DetailsWeatherCard data={weatherData} />
          </StyledBox>
        </>
      )}
    </StyledContainer>
  );
};
