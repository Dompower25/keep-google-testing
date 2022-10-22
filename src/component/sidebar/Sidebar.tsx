import React, { FC } from "react";
import { AppBar, Divider, Toolbar } from "@mui/material";
import SearchAppBar from "./search/SearchAppBar";
import MenuMainBar from "./mainMenu/MenuMainBar";
import AccountBar from "./accountBar/AccountBar";

interface ISidebar {
  toggleOpenLeftMenuBar: () => void;
}

const Sidebar: FC<ISidebar> = ({ toggleOpenLeftMenuBar }) => {
  return (
    <AppBar sx={{ bgcolor: "inherit", boxShadow: 0, zIndex: "5000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <MenuMainBar toggleOpenLeftMenuBar={toggleOpenLeftMenuBar} />
        <SearchAppBar />
        <AccountBar />
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default Sidebar;
