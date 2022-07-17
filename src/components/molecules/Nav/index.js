import { AppBar, Typography } from "@mui/material";
import { ToggleSwitch } from "components/atoms/ToogleSwitch";
import { StyledToolbar, StyledForm } from "./style";
import CloudSharpIcon from "@mui/icons-material/CloudSharp";
import { FieldText } from "components/atoms/Input";
import { useForm } from "react-hook-form";
import { useApiDataTypesMethod } from "const/apiClientMehod";
import { useWatherContext } from "context/watherDataContext";
import { useThemeContext } from "context/ThmeProviderContex";

export const Nav = () => {
  const { control, handleSubmit, reset, errors } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const { getWeatherByCityNameFromInput } = useApiDataTypesMethod();
  const { setLoader } = useWatherContext();
  const { setWeatherData } = useWatherContext();
  const { toggleTheme } = useThemeContext();

  const onSubmit = async (data) => {
    await setLoader(true);
    const res = await getWeatherByCityNameFromInput(data.search);

    if (res) {
      setWeatherData(res);
      reset();
      setLoader(false);
    }
  };

  return (
    <AppBar style={{ backgroundColor: "transparent" }} position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Pogoda
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none" } }}>
          <CloudSharpIcon />
        </Typography>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FieldText
            placeholder="search"
            control={control}
            name={"search"}
            type={"text"}
          />
        </StyledForm>

        <ToggleSwitch
          checked={localStorage.getItem("theme") === "ligth" ? true : false}
          onClick={toggleTheme}
          label={localStorage.getItem("theme") === "ligth" ? "ligth" : "dark"}
        />
      </StyledToolbar>
    </AppBar>
  );
};
