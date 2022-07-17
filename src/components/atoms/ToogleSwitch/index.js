import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

export const ToggleSwitch = ({ checked, onClick, label, ...props }) => {
  const StyledSwitch = styled(Switch)`
    border: 2px solid white;
    color: peru;
  `;

  return (
    <FormGroup>
      <FormControlLabel
        control={<StyledSwitch checked={checked} />}
        label={label}
        {...props}
        onClick={onClick}
      />
    </FormGroup>
  );
};
