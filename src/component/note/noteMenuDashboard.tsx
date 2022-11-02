import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Tooltip } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

type MenuItem = {
  textList: string;
  processFu: () => void;
  key: number;
};

type MenuPopStateProps = {
  menuList: MenuItem[];
};

// передать callback функцию в каждый элемент списка для выполнения той или иной функции
// сделать объект типа: {textList: string, callback}

const MenuPopupState = ({ menuList }: MenuPopStateProps) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Tooltip title="Еще" {...bindTrigger(popupState)}>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Menu {...bindMenu(popupState)}>
            {menuList.map(({ textList, processFu, key }) => (
              <MenuItem
                key={key}
                onClick={() => {
                  popupState.close();
                  processFu();
                }}
                sx={{ fontSize: "14px" }}
              >
                {textList}
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default MenuPopupState;
