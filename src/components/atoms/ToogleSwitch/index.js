import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export const ToggleSwitch = ({ checked, onClick, label, ...props }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} />}
        label={label}
        {...props}
        onClick={onClick}
      />
    </FormGroup>
  );
};
