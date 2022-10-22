import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import { Avatar, IconButton, Tooltip } from "@mui/material";

const DivWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
}));

const AccountBar = () => {
  return (
    <DivWrapper>
      <Tooltip title="Приложения">
        <IconButton>
          <AppsIcon sx={{ color: grey[500] }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Аккаунт">
        <IconButton>
          <Avatar sx={{ width: "35px", height: "35px" }} />
        </IconButton>
      </Tooltip>
    </DivWrapper>
  );
};

export default AccountBar;
