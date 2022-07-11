import { Container } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  margin: 20px 0px;
`;
export const StyledContainer = styled(Container)`
  padding: 20px;
`;
