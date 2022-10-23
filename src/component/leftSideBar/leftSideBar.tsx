import React, { FC, useState } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Typography } from "@mui/material";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} - 2px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface ILeftSideBar {
  toggleOpen: boolean;
}

const LeftSideBar: FC<ILeftSideBar> = ({ toggleOpen }) => {
  //opening state for hover left menu bar
  const [hoverOpenMenu, setHoverOpenMenu] = useState(false);

  return (
    <Drawer
      variant="permanent"
      open={hoverOpenMenu || toggleOpen}
      onMouseEnter={() => {
        setHoverOpenMenu(true);
      }}
      onMouseLeave={() => {
        setHoverOpenMenu(false);
      }}
      sx={{
        flexBasis: "2%",
        "& .MuiDrawer-paper": {
          top: "65px",
          boxShadow: hoverOpenMenu
            ? "1px 1px 4px rgb(0 0 0 / 10%), 2px 5px 3px rgb(0 0 0 / 7%)"
            : "none",
          border: "none",
        },
      }}
    >
      <List sx={{ pl: toggleOpen || hoverOpenMenu ? 0 : "10px" }}>
        {[
          {
            text: "Заметки",
            icon: <EmojiObjectsOutlinedIcon />,
            page: "/notes",
          },
          {
            text: "Напоминания",
            icon: <NotificationsNoneSharpIcon />,
            page: "/reminders",
          },
          {
            text: "Изменение ярлыков",
            icon: <ModeEditOutlineOutlinedIcon />,
            page: "",
          },
          { text: "Архив", icon: <ArchiveOutlinedIcon />, page: "/archive" },
          {
            text: "Корзина",
            icon: <DeleteOutlineOutlinedIcon />,
            page: "/trash",
          },
        ].map((item, index) => (
          <ListItem key={index} sx={{ padding: 0 }}>
            <ListItemButton
              sx={{
                height: "48px",
                pr: "0px",
                pl: toggleOpen || hoverOpenMenu ? "-1px" : "5px",
                "&:hover": {
                  borderRadius:
                    toggleOpen || hoverOpenMenu ? "0 25px 25px 0" : "25px",
                },
                "&:focus": {
                  borderRadius:
                    toggleOpen || hoverOpenMenu ? "0 25px 25px 0" : "50%",
                  backgroundColor: "#feefc3",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  pl: "10px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <Typography
                sx={{ opacity: toggleOpen || hoverOpenMenu ? 1 : "auto" }}
              >
                {item.text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default LeftSideBar;
