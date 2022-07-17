import { Container } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  background: ${(props) => props.theme.containerLigth};
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  margin: 20px 0px;
  color: ${(props) => props.theme.text}; ;
`;
export const StyledContainer = styled(Container)`
  padding: 20px;
`;
