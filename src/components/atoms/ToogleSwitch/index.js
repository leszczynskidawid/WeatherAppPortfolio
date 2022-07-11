import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useThemeContext } from "context/ThmeProviderContex";

export const ToggleSwitch = ({ ...props }) => {
  const { toggleTheme } = useThemeContext();
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="darkmode"
        {...props}
        onClick={toggleTheme}
      />
    </FormGroup>
  );
};
