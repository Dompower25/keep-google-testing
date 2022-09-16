import * as React from "react";
import {
  AppBar,
  IconButton,
  Divider,
  Avatar,
  Typography,
  Toolbar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <AppBar sx={{ bgcolor: "inherit", boxShadow: 0 }}>
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="menu" sx={{ pr: 3 }}>
          <Menu />
        </IconButton>
        <Avatar
          alt="Logo"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          variant="square"
          sx={{ width: 28, height: 42, pr: 2 }}
        />
        <Typography
          variant="h5"
          component="span"
          sx={{ color: "darkslategray" }}
        >
          Keep
        </Typography>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}
