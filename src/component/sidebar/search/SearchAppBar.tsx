import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { InputBase } from "@mui/material";
import { grey } from "@mui/material/colors";
import ReplayIcon from "@mui/icons-material/Replay";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(4),
  width: "55%",
  "& .Mui-focused": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    boxShadow: theme.shadows[4],
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: grey[500],
  zIndex: 3,
}));

const CloseIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: grey[500],
  zIndex: 3,
  right: "12px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "darkslategray",
  backgroundColor: grey[200],
  borderRadius: 10,
  alignSelf: "flex-start",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const DivWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  width: "80%",
}));

const DivSetting = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
}));

const SearchAppBar = () => {
  return (
    <DivWrapper>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Поиск" />
        <CloseIconWrapper>
          <CloseIcon sx={{ color: grey[500] }} />
        </CloseIconWrapper>
      </Search>
      <DivSetting>
        <ReplayIcon
          sx={{ color: grey[500], transform: "rotate(45deg)", mr: "20px" }}
        />
        <GridViewOutlinedIcon sx={{ color: grey[500], mr: "20px" }} />
        <SettingsOutlinedIcon sx={{ color: grey[500] }} />
      </DivSetting>
    </DivWrapper>
  );
};

export default SearchAppBar;
