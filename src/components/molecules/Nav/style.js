import { Toolbar } from "@mui/material";
import styled from "styled-components";

export const StyledToolbar = styled(Toolbar)`
  display: "flex";
  justify-content: "space-between";
  background: rgba(126, 119, 119, 0.9);
  backdrop-filter: blur(20px);
  color: black;

  border: 1px solid rgba(255, 255, 255, 0.18);
`;
