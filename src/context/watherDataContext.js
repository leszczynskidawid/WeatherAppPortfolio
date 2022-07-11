import { ThemeProvider } from "styled-components";

const { createContext, useState, useContext } = require("react");

const WatherContext = createContext(null);

function ProviderWeatherContext({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [loader, setLoader] = useState(false);

  const value = {
    weatherData,
    setWeatherData,
    loader,
    setLoader,
  };

  return (
    <WatherContext.Provider value={value}>{children}</WatherContext.Provider>
  );
}
export const useWatherContext = () => {
  return useContext(WatherContext);
};

export default ProviderWeatherContext;
