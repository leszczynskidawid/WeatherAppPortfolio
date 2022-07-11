import { Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "0.4fr 1fr 0.4fr 0.5fr",
  gap: "1px 0px",
  textAlign: "center",
  padding: "10px;",
  alignItems: "center",
}));
export const StyledIconContainer = styled("div")(({ theme }) => ({
  border: "0.4px solid black",
}));
