import { useNavigate } from "react-router-dom";
export const useApiClientException = () => {
  const navigate = useNavigate();
  const handleApiClientException = (e) => {
    let status = e.response.data.cod;
    let errorMessage = e.response.data.message;

    switch (status) {
      case "404":
        return navigate("/nomatch", { state: errorMessage });

      case "400":
        return navigate("/nomatch", { state: errorMessage });
      case "401":
        return navigate("/nomatch", { state: errorMessage });
      case "ERR_NETWORK":
        return navigate("/nomatch", { state: errorMessage });

      default:
        return navigate("/nomatch", { state: errorMessage });
    }
  };
  return { handleApiClientException };
};
