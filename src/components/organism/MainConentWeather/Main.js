import { useEffect } from "react";
import { StyledBox, StyledContainer } from "./style";
import { WeatherInfoCard } from "components/molecules/WeatherInfoCard/WeatherInfoCard";
import { useApiDataTypesMethod } from "const/apiClientMehod";
import { useWatherContext } from "context/watherDataContext";
import { CircularProgressLoader } from "components/atoms/CircularProgressLoader/CircularProgressLoader";
import { DetailsWeatherCard } from "components/molecules/DetailsWeatherCard/DetailsWeatherCard";
import { exampleValueGelocationCity } from "const/exampleValueGelocationCity";

const getPosition = () => {
  return new Promise((resolve, rejcet) => {
    navigator.geolocation.getCurrentPosition(resolve, rejcet);
  });
};

export const MainPage = () => {
  const { getWeatherByLocationUser } = useApiDataTypesMethod();
  const { weatherData, setWeatherData, loader, setLoader } = useWatherContext();
  const { lon, lan } = exampleValueGelocationCity.warsaw;

  useEffect(() => {
    (async function getWeather() {
      setLoader(true);

      try {
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
        alert(
          "aby korzystać z pogody w miejscu w którym sie znajdujesz zezwól przeglądatce na pobranie Twojej aktualnej lokalizacji ",
        );

        const rest = await getWeatherByLocationUser(lan, lon);
        await setWeatherData(rest);
        await setLoader(false);
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
