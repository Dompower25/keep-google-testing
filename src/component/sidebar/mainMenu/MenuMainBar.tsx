import React from "react";
import { IconButton, Avatar, Typography, styled } from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";

const MenuMainBar = () => {
  const DivWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  }));

  return (
    <DivWrapper>
      <IconButton edge="start" aria-label="menu" sx={{ mr: 1}}>
        <MenuRounded fontSize="medium" />
      </IconButton>
      <Avatar
        alt="Logo"
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        variant="square"
        sx={{ width: 40, height: 40, pr: 1 }}
      />
      <Typography variant="h6" component="span" sx={{ color: "darkslategray" }}>
        Keep
      </Typography>
    </DivWrapper>
  );
};

export default MenuMainBar;
