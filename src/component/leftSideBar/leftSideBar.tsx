import * as React from "react";
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

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        flexBasis: "2%",
        "& .MuiDrawer-paper": {
          top: "65px",
          boxShadow: open
            ? "1px 1px 4px rgb(0 0 0 / 10%), 2px 5px 3px rgb(0 0 0 / 7%)"
            : "none",
          border: "none",
        },
      }}
    >
      <List sx={{ pl: open ? 0 : "10px" }} onClick={handleDrawerOpen}>
        {[
          { text: "Заметки", icon: <EmojiObjectsOutlinedIcon /> },
          { text: "Напоминания", icon: <NotificationsNoneSharpIcon /> },
          {
            text: "Изменение ярлыков",
            icon: <ModeEditOutlineOutlinedIcon />,
          },
          { text: "Архив", icon: <ArchiveOutlinedIcon /> },
          { text: "Корзина", icon: <DeleteOutlineOutlinedIcon /> },
        ].map((item, index) => (
          <ListItem key={index} sx={{ pt: "0", pb: "0", pr: "0", pl: "0" }}>
            <ListItemButton
              sx={{
                height: "48px",
                pr: "0px",
                pl: open ? "-1px" : "5px",
                "&:hover": {
                  borderRadius: open ? "0 25px 25px 0" : "25px",
                },
                "&:focus": {
                  borderRadius: open ? "0 25px 25px 0" : "50%",
                  backgroundColor: "#feefc3",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  pl: "10px",
                  mr: open ? "3px" : "auto",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <Typography sx={{ opacity: open ? 1 : "auto" }}>
                {item.text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
