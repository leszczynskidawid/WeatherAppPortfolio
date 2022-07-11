const { default: axios } = require("axios");
const { useApiClientException } = require("hooks/useApiClinetException");
const { apiKey } = require("./apiKey");

export const useApiDataTypesMethod = () => {
  const { handleApiClientException } = useApiClientException();
  const getWeatherByLocationUser = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pl`,
      );

      return response;
    } catch (error) {
      return handleApiClientException(error);
    }
  };
  const getWeatherByCityNameFromInput = async (valueCityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${valueCityName}&appid=${apiKey}&units=metric&lang=pl`,
      );
      return response;
    } catch (error) {
      return handleApiClientException(error);
    }
  };

  return {
    getWeatherByLocationUser,
    getWeatherByCityNameFromInput,
  };
};
