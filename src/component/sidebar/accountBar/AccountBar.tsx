import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import { Avatar } from "@mui/material";


const DivWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
}));

const AccountBar = () => {
  return (
    <DivWrapper>
      <AppsIcon sx={{ color: grey[500] }} />
      <Avatar/>
    </DivWrapper>
  );
};

export default AccountBar;
