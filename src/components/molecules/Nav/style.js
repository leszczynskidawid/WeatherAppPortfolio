import { Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledToolbar = styled(Toolbar)`
  display: "flex";
  justify-content: "space-between";
  background: ${(props) => props.theme.container};
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: ${(props) => props.theme.text};
`;
export const StyledForm = styled.form`
  margin: 0 10px;
  width: 100%;
  align-items: center;
`;
