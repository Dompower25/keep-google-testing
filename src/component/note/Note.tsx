import React, { useState } from "react";
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

const CreatingNoteInput = styled(InputBase)(({ theme }) => ({
  display: "flex",
  padding: "8px 10px",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  minWidth: "100%",
}));

const Notes = () => {
  const [notesText, setNotesText] = useState("notesText text");
  const [notesHeaderText, setNotesHeaderText] = useState("notesHeaderText");

  return (
    <Box
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
          <Box>{notesHeaderText}</Box>
          <IconButton>
            <AttachFileIcon fontSize="medium" />
          </IconButton>
        </Box>
        <Box sx={{ padding: "0 15px" }}>{notesText}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            padding: "8px 5px 4px",
            opacity: "1",
          }}
        >
          <CastomSpan>
            <IconButton>
              <NotificationAddOutlinedIcon fontSize="small" />
            </IconButton>
          </CastomSpan>
          <CastomSpan>
            <IconButton>
              <PersonAddAltOutlinedIcon fontSize="small" />
            </IconButton>
          </CastomSpan>
          <CastomSpan>
            <IconButton>
              <ColorLensOutlinedIcon fontSize="small" />
            </IconButton>
          </CastomSpan>
          <CastomSpan>
            <IconButton>
              <PhotoOutlinedIcon fontSize="small" />
            </IconButton>
          </CastomSpan>
          <CastomSpan>
            <IconButton>
              <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
          </CastomSpan>
          <CastomSpan>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </CastomSpan>
        </Box>
      </StyledNote>
    </Box>
  );
};

export default Notes;
