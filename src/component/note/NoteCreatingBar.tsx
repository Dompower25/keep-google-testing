import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
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

  const openWindow = () => {
    if (openWindowCreatingNote === false) {
      setOpenWindowCreatingNote(true);
    }
  };

  return (
    <CreatingNoteInput onClick={openWindow}>
      {openWindowCreatingNote ? (
        <OpenCreatingNoteBar />
      ) : (
        <StyledInputBase>
          <Typography
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
            <IconButton sx={{ margin: "0 10px" }}>
              <CheckBoxOutlinedIcon />
            </IconButton>
            <IconButton sx={{ margin: "0 10px" }}>
              <BrushIcon />
            </IconButton>
            <IconButton>
              <PhotoOutlinedIcon />
            </IconButton>
          </Box>
        </StyledInputBase>
      )}
    </CreatingNoteInput>
  );
};

export default NoteCreatingBar;
