import axios from "axios";
import { apiKey } from "const/apiKey";

const baseURL =
  process.env.REACT_API_URL ||
  `https://api.openweathermap.org/data/2.5/onecall?&appid=${apiKey}`;

const api_istance = axios.create({
  baseURL,
  timeout: 5000,
});

export { api_istance };
