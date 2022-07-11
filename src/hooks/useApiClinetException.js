export const useApiClientException = () => {
  const handleApiClientException = (e) => {
    console.log("handle", e.response.data.cod);
    let status = e.response.data.cod;
    let errorMessage = e.response.data.message;

    switch (status) {
      case 404:
        errorMessage = e.message;

        alert(errorMessage);
        break;

      case 400:
        alert(errorMessage);
        break;
      default:
        alert(errorMessage);
    }
  };
  return { handleApiClientException };
};
