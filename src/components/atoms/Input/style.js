import { InputBase } from "@mui/material";
import styled from "styled-components";

export const Search = styled.div`
  background-color: ${(props) => props.theme.text};
  border-radius: 9px;
  padding: 0 10px;
  width: 70%;
`;
export const StyledInput = styled(InputBase)`
  color: white;
`;
