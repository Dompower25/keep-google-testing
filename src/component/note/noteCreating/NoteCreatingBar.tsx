import React, { useCallback, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { IconButton, Tooltip, Typography } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushIcon from "@mui/icons-material/Brush";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import OpenCreatingNoteBar from "./OpenCreatingNoteBar";
import { Box } from "@mui/system";

const CreatingNoteInput = styled("div")(({ theme }) => ({
  alignSelf: "center",
  flexWrap: "nowrap",
  maxWidth: "600px",
  minWidth: "600px",
  marginBottom: "30px",
}));

const StyledInputBase = styled("div")(({ theme }) => ({
  padding: "2px 25px 2px 15px",
  boxSizing: "border-box",
  outline: "none",
  whiteSpace: "pre-wrap",
  borderRadius: "8px",
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  boxShadow:
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
  fontSize: "18px",
  display: "flex",
  alignSelf: "center",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  maxWidth: "600px",
  minWidth: "600px",
  border: "1px solid rgb(0 0 0 / 15%)",
}));

const NoteCreatingBar = () => {
  const [openWindowCreatingNote, setOpenWindowCreatingNote] = useState(false);

  const toggleOpenCreationNote = useCallback(() => {
    setOpenWindowCreatingNote(
      (openWindowCreatingNote) => !openWindowCreatingNote
    );
  }, []);

  return (
    <CreatingNoteInput>
      {openWindowCreatingNote ? (
        <OpenCreatingNoteBar toggleOpenCreationNote={toggleOpenCreationNote} />
      ) : (
        <StyledInputBase>
          <Typography
            onClick={toggleOpenCreationNote}
            mt={0.6}
            sx={{
              fontSize: "15px",
              pt: "5px",
              color: "rgb(0 0 0 / 65%)",
              letterSpacing: "0.5px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "600",
            }}
          >
            Заметка...
          </Typography>
          <Box>
            <Tooltip title="Создать список">
              <IconButton sx={{ margin: "0 10px" }}>
                <CheckBoxOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Создать заметку с рисунком">
              <IconButton sx={{ margin: "0 10px" }}>
                <BrushIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Создать фотозаметку">
              <IconButton>
                <PhotoOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </StyledInputBase>
      )}
    </CreatingNoteInput>
  );
};

export default NoteCreatingBar;
