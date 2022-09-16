import React from "react";
import { IconButton, Avatar, Typography, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";

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
      <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 1 }}>
        <Menu />
      </IconButton>
      <Avatar
        alt="Logo"
        src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
        variant="square"
        sx={{ width: 28, height: 42, pr: 2 }}
      />
      <Typography variant="h5" component="span" sx={{ color: "darkslategray" }}>
        Keep
      </Typography>
    </DivWrapper>
  );
};

export default MenuMainBar;
