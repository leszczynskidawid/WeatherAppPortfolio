import { AppBar, Typography } from "@mui/material";
import { ToggleSwitch } from "components/atoms/ToogleSwitch";
import { StyledToolbar } from "./style";
import CloudSharpIcon from "@mui/icons-material/CloudSharp";
import { FieldText } from "components/atoms/Input";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useApiDataTypesMethod } from "const/apiClientMehod";
import { useWatherContext } from "context/watherDataContext";

export const Nav = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const { getWeatherByCityNameFromInput } = useApiDataTypesMethod();
  const { setLoader } = useWatherContext();
  const { setWeatherData } = useWatherContext();
  const onSubmit = async (data) => {
    await setLoader(true);
    await getWeatherByCityNameFromInput(data.search).then((res) =>
      setWeatherData(res),
    );
    reset();
    setLoader(false);
  };

  const StyldForm = styled.form`
    margin: 0 10px;
    width: 100%;
    align-items: center;
  `;
  return (
    <AppBar style={{ backgroundColor: "transparent" }} position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Pogoda
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none" } }}>
          <CloudSharpIcon />
        </Typography>
        <StyldForm onSubmit={handleSubmit(onSubmit)}>
          <FieldText
            placeholder="search"
            control={control}
            name={"search"}
            type={"text"}
          />
        </StyldForm>

        <ToggleSwitch />
      </StyledToolbar>
    </AppBar>
  );
};
