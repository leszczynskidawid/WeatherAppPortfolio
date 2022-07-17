import { useLocation, useNavigate } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Typography } from "@mui/material";
import { StyledBox } from "components/organism/MainConentWeather/style";
export const NoMatchPage = () => {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <StyledBox color={"white"} tex>
      <Typography variant="h2">{location.state}</Typography>
      <Typography variant="h3   ">
        <button onClick={() => navigation(-1)}>
          {" "}
          <RefreshIcon />
        </button>
      </Typography>
    </StyledBox>
  );
};
