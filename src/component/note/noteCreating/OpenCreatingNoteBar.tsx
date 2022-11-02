import React, { FC } from "react";
import { Button, IconButton, InputBase, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import RedoRoundedIcon from "@mui/icons-material/RedoRounded";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box } from "@mui/system";
import { getByPlaceholderText } from "@testing-library/react";

const StyledInputBase = styled("div")(({ theme }) => ({
  padding: "2px 5px 2px 5px",
  boxSizing: "border-box",
  outline: "none",
  whiteSpace: "pre-wrap",
  borderRadius: "8px",
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  boxShadow:
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  width: "100%",
  border: "1px solid rgb(0 0 0 / 15%)",
}));

const CreatingNoteInput = styled(InputBase)(({ theme }) => ({
  display: "flex",
  padding: "8px 10px",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  width: "37%",
}));

interface IOpenCreatingNoteBar {
  toggleOpenCreationNote: () => void;
}

const OpenCreatingNoteBar: FC<IOpenCreatingNoteBar> = ({
  toggleOpenCreationNote,
}) => {

  return (
    <StyledInputBase>
      <Box
        component="span"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <CreatingNoteInput placeholder="Введите заголовок" />
        <IconButton>
          <AttachFileIcon fontSize="medium" sx={{ padding: "0px 4px" }} />
        </IconButton>
      </Box>
      <CreatingNoteInput placeholder="Заметка..." />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 5px 4px",
        }}
      >
        <IconButton>
          <NotificationAddOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <PersonAddAltOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <ColorLensOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <PhotoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <MoreVertIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <UndoRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <RedoRoundedIcon fontSize="small" />
        </IconButton>
        <Box
          sx={{ flexBasis: "30%", display: "flex", justifyContent: "flex-end" }}
          onClick={toggleOpenCreationNote}
        >
          <Button
            variant="text"
            size="large"
            sx={{
              textTransform: "none",
              color: "rgb(0 0 0 / 70%)",
              fontFamily: "Arial, sans-serif",
              fontWeight: "600",
              fontSize: "12px",
              padding: "8px 25px",
            }}
          >
            Закрыть
          </Button>
        </Box>
      </Box>
    </StyledInputBase>
  );
};

export default OpenCreatingNoteBar;
