import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import {
  DeleteNote,
  AddNote,
  AddPicture,
  CreateCopy,
  AsAList,
  CopyInGoogleDocument,
} from "../../processes/noteMiniMenu";

import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box } from "@mui/system";

import MenuPopupState from "./noteMenuDashboard";

const StyledNote = styled("div")(({ theme }) => ({
  padding: "12px 2px 0 0",
  boxSizing: "border-box",
  outline: "none",
  whiteSpace: "pre-wrap",
  borderRadius: "8px",
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  maxWidth: "600px",
  border: "1px solid rgb(0 0 0 / 15%)",
  "&:hover": {
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
    transition: ".1s",
  },
}));

const CastomSpan = styled("span")(() => ({
  paddingRight: "14px",
}));

// const CreatingNoteInput = styled(InputBase)(({ theme }) => ({
//   display: "flex",
//   padding: "8px 10px",
//   justifyContent: "space-between",
//   flexWrap: "nowrap",
//   minWidth: "100%",
// }));

const menuList = [
  { textList: "Удалить заметку", processFu: DeleteNote, key: 1 },
  { textList: "Добавить заметку", processFu: AddNote, key: 2 },
  { textList: "Добавить рисунок", processFu: AddPicture, key: 3 },
  { textList: "Создать копию", processFu: CreateCopy, key: 4 },
  { textList: "В виде списка", processFu: AsAList, key: 5 },
  {
    textList: "Скопирвать в Google Документы",
    processFu: CopyInGoogleDocument,
    key: 6,
  },
];

const Notes = () => {
  const [notesText, setNotesText] = useState("notesText text");
  const [notesHeaderText, setNotesHeaderText] = useState("notesHeaderText");
  const [hoverMouse, setHoverMouse] = useState(0);

  const useHoverMouse = () => {
    hoverMouse === 1 ? setHoverMouse(0) : setHoverMouse(1);
  };

  return (
    <Box
      onMouseEnter={useHoverMouse}
      onMouseLeave={useHoverMouse}
      sx={{
        margin: "8px 0",
        alignSelf: "center",
        minWidth: "600px",
      }}
    >
      <StyledNote>
        <Box
          component="span"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 5px 0 15px ",
          }}
        >
          <Box
            sx={{ fontFamily: "Roboto, arial, sans-serif", fontSize: "16px" }}
          >
            {notesHeaderText}
          </Box>
          <Tooltip title="Закрепить заметку">
            <IconButton>
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            padding: "0 15px",
            fontFamily: "Roboto, arial, sans-serif",
            fontSize: "14px",
          }}
        >
          {notesText}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            padding: "8px 5px 4px",
            opacity: `${hoverMouse}`,
          }}
        >
          <CastomSpan>
            <Tooltip title="Сохранить напоминание">
              <IconButton>
                <NotificationAddOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CastomSpan>
          <CastomSpan>
            <Tooltip title="Соавторы">
              <IconButton>
                <PersonAddAltOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CastomSpan>
          <CastomSpan>
            <Tooltip title="Параметры фона">
              <IconButton>
                <ColorLensOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CastomSpan>
          <CastomSpan>
            <Tooltip title="Добавить картинку">
              <IconButton>
                <PhotoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CastomSpan>
          <CastomSpan>
            <Tooltip title="Архивировать">
              <IconButton>
                <ArchiveOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CastomSpan>
          <CastomSpan>
            <MenuPopupState menuList={menuList} />
          </CastomSpan>
        </Box>
      </StyledNote>
    </Box>
  );
};

export default Notes;
