import { Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 1fr 0.4fr 0.5fr;
  gap: 1px 0px;
  text-align: center;
  padding: 10px;
`;

export const StyledIconContainer = styled.div`
  border: 0.4px solid black;
  & img {
    width: 200px;
    height: 200px;
  }
`;
