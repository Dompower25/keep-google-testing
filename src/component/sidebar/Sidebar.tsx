import * as React from "react";
import { AppBar, Divider, Toolbar } from "@mui/material";
import SearchAppBar from "./search/SearchAppBar";
import MenuMainBar from "./mainMenu/MenuMainBar";
import AccountBar from "./accountBar/AccountBar";

export default function Sidebar() {
  return (
    <AppBar sx={{ bgcolor: "inherit", boxShadow: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <MenuMainBar />
        <SearchAppBar />
        <AccountBar />
      </Toolbar>
      <Divider />
    </AppBar>
  );
}
