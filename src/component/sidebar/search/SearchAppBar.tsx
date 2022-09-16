import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { InputBase, Box } from "@mui/material";
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
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
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
  padding: theme.spacing(0, 30),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: grey[500],
  zIndex: 3,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "darkslategray",
  backgroundColor: grey[200],
  borderRadius: 5,
  alignSelf: "flex-start",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    boxShadow: theme.shadows[4],
  },
  "&:focus": {             //доделать при активации
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    boxShadow: theme.shadows[4],
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: '100%',
  },
}));

const DivWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
}));

const SearchAppBar = () => {
  return (
    <DivWrapper sx={{ justifyContent: 'space-between' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Поиск" />
        <CloseIconWrapper>
          <CloseIcon sx={{ color: grey[500] }} />
        </CloseIconWrapper>
      </Search>
      <DivWrapper>
        <ReplayIcon sx={{ color: grey[500], transform: "rotate(45deg)" }} />
        <GridViewOutlinedIcon sx={{ color: grey[500] }} />
        <SettingsOutlinedIcon sx={{ color: grey[500] }} />
      </DivWrapper>
    </DivWrapper>
  );
};

export default SearchAppBar;
