import { useNavigate } from "react-router-dom";
import { routePathTypes } from "const/routePathTypes";
export const useApiClientException = () => {
  const navigate = useNavigate();
  const handleApiClientException = (e) => {
    let status = e.response.data.cod;
    let errorMessage = e.response.data.message;

    switch (status) {
      case "404":
        return navigate(routePathTypes.noMatch, { state: errorMessage });
      case "400":
        return navigate(routePathTypes.noMatch, { state: errorMessage });
      case "401":
        return navigate(routePathTypes.noMatch, { state: errorMessage });
      case "ERR_NETWORK":
        return navigate(routePathTypes.noMatch, { state: errorMessage });
      default:
        return navigate(routePathTypes.noMatch, { state: errorMessage });
    }
  };
  return { handleApiClientException };
};
